#!/usr/bin/env python3
from flask import Flask
from flask import redirect
from flask_socketio import SocketIO, emit
from flask import stream_with_context, Response
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

@socketio.on('connect', namespace='/test')
def test_connect():
    emit('my response', {'data': 'Connected'})

@socketio.on('disconnect', namespace='/test')
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
    socketio.run(app, host='0.0.0.0')


if __name__ == "__main__":
    start_server()

