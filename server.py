#!/usr/bin/env python3
from flask import Flask
from flask_socketio import SocketIO, emit, join_room, leave_room
from flask import request, send_from_directory
from wsgidav.wsgidav_app import DEFAULT_CONFIG, WsgiDAVApp
from wsgidav.fs_dav_provider import FilesystemProvider
from werkzeug.wsgi import DispatcherMiddleware
from werkzeug.exceptions import Unauthorized
from werkzeug.wrappers import Response
from werkzeug.utils import redirect
from wsgicors import CORS
from wsgigzip import GzipMiddleware
import os
import sys
import mimetypes
import pyinotify
import signal
import static
from hooks import register_hooks

signal.signal(signal.SIGINT, signal.SIG_DFL)
mimetypes.add_type('image/svg+xml', '.svg')
mimetypes.add_type('application/x-font-woff', '.woff')
mimetypes.add_type('application/x-rapyd', '.pyj')

app_dir = "."
app = Flask(__name__, 
        static_url_path='',
        static_folder=app_dir)
register_hooks(app)
socketio = SocketIO(app)

@app.route("/")
def hello():
    return send_from_directory(app.root_path, 'index.html', 
                                                    mimetype='text/html')

@app.route('/favicon.ico')
def favicon():
    return send_from_directory(app.root_path, 'favicon.ico',
                                        mimetype='vnd.microsoft.icon')

@app.route("/shutdown")
def bye(*args):
    print ("Bye!")
    try:
        socketio.stop()
    except RuntimeError:
        pass
    sys.exit()

@socketio.on('connect')
def test_connect():
    print (request.remote_addr, request.user_agent)

@socketio.on('joinRoom')
def joinRoom(room):
    join_room(room)

@socketio.on('yjsEvent')
def yjsEvent(message):
    emit('yjsEvent', message, broadcast=True, skip_sid=request.sid)

@socketio.on('jappyTrigger')
def jappyEvent(message, room):
    socketio.emit('jappyEvent', message, skip_sid=request.sid,
                                  room=room, broadcast=True)

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
        elif environ.get('REQUEST_METHOD')=='GET':
            # Let's redirect to static route
            filename = environ.get('PATH_INFO') \
                    [environ.get('PATH_INFO').find('/')+1:]
            if path and os.path.exists('workspace/' + \
                                        filename):
                pass
            elif path and filename.endswith('.html'):
                if filename[len(path)+1:] != 'index.html':
                    environ['PATH_INFO'] = '/' + filename[len(path)+1:]
                    response = static.Cling(app.root_path)
                    return response(environ, start_response)
            elif path:
                response = redirect('/' + filename[len(path)+1:])
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
    # CORS middleware doesn't like exc_info
    filtered_dav_app = DAVFilterMiddleWare(cors_dav_app)
    filtered_dav_app = GzipMiddleware(filtered_dav_app, 
            mime_types = [ 'application/javascript', 'application/x-rapyd',
                           'application/xml','image/svg+xml', 'text/*' ]
                )
    app.wsgi_app = DispatcherMiddleware(app.wsgi_app, {
        '/dav' : filtered_dav_app
    })
    socketio.run(app, host='0.0.0.0', port=54991)

class EventHandler(pyinotify.ProcessEvent):
    def process_IN_CREATE(self, event): # simplify with a default handler, DRY
        room = event.path[10:]
        socketio.emit('jappyEvent', { 'event': 'file-create',
                                         'data': {
                                            'filename':event.name }
                                         },
                                      room=room, broadcast=True)
    def process_IN_DELETE(self, event):
        room = event.path[10:]
        socketio.emit('jappyEvent', { 'event': 'file-delete',
                                         'data': {
                                            'filename':event.name }
                                         },
                                      room=room, broadcast=True)
    def process_IN_CLOSE_WRITE(self, event):
        room = event.path[10:]
        socketio.emit('jappyEvent', { 'event': 'file-update',
                                         'data': {
                                            'filename':event.name }
                                         },
                                      room=room, broadcast=True)
    def process_IN_MOVED_TO(self, event):
        room = event.path[10:]
        socketio.emit('jappyEvent', { 'event': 'file-rename',
                                         'data': {
                                            'filename':event.name,
        # 'src_file':event.src_pathname # isn't always defined
                                            }
                                         },
                                      room=room, broadcast=True)

def launch_file_monitor():
    print ('Starting file monitor...')
    mask = pyinotify.IN_DELETE | pyinotify.IN_CREATE |\
           pyinotify.IN_CLOSE_WRITE | pyinotify.IN_MOVED_TO
    wm = pyinotify.WatchManager()
    notifier = pyinotify.ThreadedNotifier(wm, EventHandler())
    wm.add_watch('workspace', mask, rec=True, auto_add=True)
    notifier.start()

if __name__ == "__main__":
    start_server()

