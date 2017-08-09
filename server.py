#!/usr/bin/env python3
from flask import Flask
from flask import redirect
from flask_socketio import SocketIO, emit, join_room, leave_room
from flask import request, abort
from wsgidav.wsgidav_app import DEFAULT_CONFIG, WsgiDAVApp
from wsgidav.fs_dav_provider import FilesystemProvider
from werkzeug.wsgi import DispatcherMiddleware
from werkzeug.exceptions import Unauthorized
from werkzeug.wrappers import Response
from wsgicors import CORS
import os
import sys
import mimetypes
import pyinotify
import signal
signal.signal(signal.SIGINT, signal.SIG_DFL)
mimetypes.add_type('image/svg+xml', '.svg')
mimetypes.add_type('application/x-font-woff', '.woff')

app_dir = "."
app = Flask(__name__, 
        static_url_path='',
        static_folder=app_dir)
socketio = SocketIO(app)

@app.route("/")
def hello():
    return redirect(app_dir + "/index.html")

@app.route("/shutdown")
def bye(*args):
    print ("Bye!")
    try:
        socketio.stop()
    except RuntimeError:
        pass
    sys.exit()
    return 'Bye!'

@socketio.on('connect')
def test_connect():
    print (request.remote_addr, request.user_agent)

@socketio.on('joinRoom')
def joinRoom(room):
    join_room(room)

@socketio.on('yjsEvent')
def yjsEvent(message):
    emit('yjsEvent', message, broadcast=True)

@socketio.on('jappyEvent')
def jappyEvent(message=None):
    print ('Got jappyEvent')

@socketio.on('leaveRoom')
def leaveRoom(room):
    leave_room(room)

@socketio.on('disconnect')
def test_disconnect():
    print('Client disconnected')

class DAVFilterMiddleWare(object):
    ''' WSGI Middleware to wrap DAV - for reacting to events and limit access '''
    def __init__(self, app):
        self.app = app

    def __call__(self, environ, start_response):
        def custom_start_response(status, headers, exc_info=None):
            headers.append(('Cache-Control', 'no-cache, no-store, must-revalidate'))
            return start_response(status, headers, exc_info)
        if environ.get('PATH_INFO').count('/')>1:
            path = environ.get('PATH_INFO')[1:environ.get('PATH_INFO')[1:].index('/')+1]
        elif environ.get('PATH_INFO').count('/')>1:
            path = environ.get('PATH_INFO')[1:]
        else:
            path = ''
        if environ.get('PATH_INFO') in ['', '/'] and \
                environ.get('REQUEST_METHOD')=='PROPFIND':
            # Let's not allow listing of projects
            return Unauthorized()(environ, start_response)
        elif environ.get('REQUEST_METHOD')=='GET' and \
                environ.get('PATH_INFO')[len(path)+1:] \
                    .startswith(('/lib', '/css', '/fonts')) :
            # Let's redirect to static route
            filename = environ.get('PATH_INFO')[len(path)+1:]
            if not os.path.exists(filename):
                response = redirect('../../..' + filename)
                return response(environ, start_response)
        elif environ.get('PATH_INFO').count('/') < 2 and \
                environ.get('REQUEST_METHOD')=='DELETE':
            # Let's disallow removing project directories
            return Unauthorized()(environ, start_response)
        elif environ.get('PATH_INFO').count('/') < 2 and \
                environ.get('REQUEST_METHOD')=='MKCOL':
            dirname = 'workspace' + environ.get('PATH_INFO')
            if os.path.exists(dirname):
                response = Response('Already exists.')
                return response(environ, start_response)
        return self.app(environ, custom_start_response)

def start_server():
    launch_file_monitor()
    provider = FilesystemProvider('workspace')
    config = DEFAULT_CONFIG.copy()
    config.update({
        "mount_path": "/dav",
        "provider_mapping": {"/": provider},
        "user_mapping": {},
        "verbose": 1,
    })
    dav_app = WsgiDAVApp(config)
    cors_dav_app = CORS(dav_app, headers="*", methods="*", maxage="180", origin="*")
    filtered_dav_app = DAVFilterMiddleWare(cors_dav_app)
    app.wsgi_app = DispatcherMiddleware(app.wsgi_app, {
        '/dav' : filtered_dav_app
    })
    socketio.run(app, host='0.0.0.0', port=54991)

class EventHandler(pyinotify.ProcessEvent):
    def process_IN_CREATE(self, event):
        room = event.path[10:]
        socketio.emit('jappyEvent', { 'event': 'file-event',
                                         'data': {
                                            'maskname':event.maskname,
                                            'filename':event.name }
                                         },
                                      room=room, broadcast=True)

    def process_IN_DELETE(self, event):
        room = event.path[10:]
        socketio.emit('jappyEvent', { 'event': 'file-event',
                                         'data': {
                                            'maskname':event.maskname,
                                            'filename':event.name }
                                         },
                                      room=room, broadcast=True)

def launch_file_monitor():
    print ('Starting file monitor...')
    mask = pyinotify.IN_DELETE | pyinotify.IN_CREATE  # watched events
    wm = pyinotify.WatchManager()
    notifier = pyinotify.ThreadedNotifier(wm, EventHandler())
    wm.add_watch('workspace', mask, rec=True, auto_add=True)
    notifier.start()

if __name__ == "__main__":
    start_server()

