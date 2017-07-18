#!/usr/bin/env python3
from flask import Flask
from flask import redirect
from flask_socketio import SocketIO, emit, join_room, leave_room
from flask import stream_with_context, Response, request
from wsgidav.wsgidav_app import DEFAULT_CONFIG, WsgiDAVApp
from wsgidav.fs_dav_provider import FilesystemProvider
from werkzeug.wsgi import DispatcherMiddleware
import os
import sys
import mimetypes
mimetypes.add_type('image/svg+xml', '.svg')
mimetypes.add_type('application/x-font-woff', '.woff')

app_dir = "Jappy.activity"

app = Flask(__name__, static_folder=app_dir)
socketio = SocketIO(app)

@app.route("/")
def hello():
    return redirect(app_dir + "/index.html")

@app.route("/shutdown")
def bye(*args):
    print ("Bye!")
    socketio.stop()
    sys.exit()
    return 'Bye!'

@socketio.on('connect')
def test_connect():
    print ('CONNECTED')

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

def start_server():
    bundle_dir = os.path.dirname(os.path.realpath(__file__))
    provider = FilesystemProvider(app_dir)
    config = DEFAULT_CONFIG.copy()
    config.update({
        "mount_path": "/dav",
        "provider_mapping": {"/": provider},
        "user_mapping": {},
        "verbose": 1,
    })
    dav_app = WsgiDAVApp(config)
    app.wsgi_app = DispatcherMiddleware(app.wsgi_app, {
        '/dav' : dav_app
    })
    socketio.run(app, host='0.0.0.0', port=54991)

if __name__ == "__main__":
    start_server()

