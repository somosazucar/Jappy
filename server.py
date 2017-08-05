#!/usr/bin/env python3
from flask import Flask
from flask import redirect, abort
from flask_socketio import SocketIO, emit, join_room, leave_room
from flask import request
from wsgidav.wsgidav_app import DEFAULT_CONFIG, WsgiDAVApp
from wsgidav.fs_dav_provider import FilesystemProvider
from werkzeug.wsgi import DispatcherMiddleware
from wsgicors import CORS
import sys
import threading
import mimetypes
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
    emit('jappyEvent', message, broadcast=True)

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
        def wrapped_response(status, response_headers, what):
            if environ.get('PATH_INFO') in ['', '/']:
                response = redirect('/') # We don't want to list all
                return response(environ, start_response)
            return start_response(status, response_headers, what)
        return self.app(environ, wrapped_response)

def start_server():
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

if __name__ == "__main__":
    start_server()

