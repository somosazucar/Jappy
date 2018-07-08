#!/usr/bin/env python3
from flask import Flask
from flask_socketio import SocketIO, emit, join_room, leave_room
from flask import request, send_from_directory, stream_with_context
from wsgidav.wsgidav_app import DEFAULT_CONFIG, WsgiDAVApp
from wsgidav.fs_dav_provider import FilesystemProvider
from werkzeug.wsgi import DispatcherMiddleware
from werkzeug.exceptions import Unauthorized
from werkzeug.wrappers import Response
from wsgicors import CORS
from wsgigzip import GzipMiddleware
import os
import sys
import mimetypes
import pyinotify
import requests
import signal
import static
from jappy.hooks import register_hooks

signal.signal(signal.SIGINT, signal.SIG_DFL)
mimetypes.add_type('image/svg+xml', '.svg')
mimetypes.add_type('application/x-font-woff', '.woff')
mimetypes.add_type('application/x-rapyd', '.pyj')
mimetypes.add_type('application/json', '.json')

WRITING_DOCS = (os.environ.get('JAPPY_TIDDLY_BRIDGE') == '1')
if WRITING_DOCS:
    print("Briding to local Tiddlyserver on port 8080.")

app_dir = "../webapp"
app = Flask(__name__,
            static_url_path='',
            static_folder=app_dir)
web_app_dir = os.path.realpath(os.path.join(app.root_path, app_dir))
if not os.path.isdir(web_app_dir):
    app_dir = "webapp"
    del app
    app = Flask(__name__,
                static_url_path='',
                static_folder=app_dir)
    web_app_dir = os.path.realpath(os.path.join(app.root_path, app_dir))
    if not os.path.isdir(web_app_dir):
        raise ImportError('Jappy Web Application cannot be found.')

register_hooks(app)
socketio = SocketIO(app)
web_app_dir = os.path.realpath(os.path.join(app.root_path, '../webapp/'))

workspace_dir = os.path.realpath(os.path.join(os.path.expanduser("~"), 'Workspace'))
if not os.path.isdir(workspace_dir):
    os.mkdir(workspace_dir)

jappy_server_version = '0.5'
response_trailer = '<link rel="stylesheet" href="/css/folder.css" />' + \
    '<script src="/lib/folder.js"></script>' + \
    '<iframe id="run" name="run"></iframe>' + \
    'Jappy Server ' + jappy_server_version


@app.route("/")
def hello():
    return send_from_directory(web_app_dir, 'index.html',
                               mimetype='text/html')


@app.after_request
def add_header(response):
    response.set_cookie('Jappy-Server-Version', jappy_server_version)
    return response


@app.route('/favicon.ico')
def favicon():
    return send_from_directory(web_app_dir, 'favicon.ico',
                               mimetype='vnd.microsoft.icon')


@app.route('/jappy.json')
def i18n():
    return send_from_directory(web_app_dir, 'jappy.json',
                               mimetype='application/json')


@app.route('/docs/', defaults={'path': ''}, methods=['GET', 'PUT', 'HEAD', 'DELETE'])
@app.route('/docs/<path:path>', methods=['GET', 'PUT', 'HEAD', 'DELETE'])
def docs(path):
    if WRITING_DOCS:
        url = 'http://localhost:8080/{}'.format(path)
        if request.method == 'GET':
            req = requests.get(url, stream=True)
            return Response(stream_with_context(req.raw.stream(decode_content=False)),
                            content_type=req.headers.get('content-type'))
        elif request.method == 'PUT':
            req = requests.put(url, request.data)
            resp = Response(req.text)
            for header in req.headers:
                resp.headers[header] = req.headers[header]
            return resp
        elif request.method == 'DELETE':
            req = requests.delete(url)
            resp = Response(req.text)
            for header in req.headers:
                resp.headers[header] = req.headers[header]
            return resp
        else:
            resp = Response('')
            resp.headers['ETag'] = None
            return resp
    else:
        return send_from_directory(os.path.join(web_app_dir, 'docs'), 'wiki.html',
                                   mimetype='text/html')


@app.route('/manifest.json')
def manifest():
    return send_from_directory(web_app_dir, 'manifest.json',
                               mimetype='application/manifest+json')


@app.route("/shutdown")
def bye(*args):
    print("Bye!")
    try:
        socketio.stop()
    except RuntimeError:
        pass
    sys.exit()


@socketio.on('connect')
def test_connect():
    print(request.remote_addr, request.user_agent)


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
    ''' WSGI Middleware to wrap DAV - to limit access '''

    def __init__(self, app):
        self.app = app

    def __call__(self, environ, start_response):
        def custom_start_response(status, headers, exc_info=None):
            headers.append(('Cache-Control',
                            'no-cache, no-store, must-revalidate'))
            return start_response(status, headers, exc_info)
        if environ.get('PATH_INFO').count('/') > 1:
            path = environ.get(
                'PATH_INFO')[1:environ.get('PATH_INFO')[1:].index('/') + 1]
        else:
            path = ''
        if environ.get('REQUEST_METHOD') == 'PROPFIND':
            if environ.get('PATH_INFO') in ['', '/']:
                # Let's not allow listing of projects
                return Unauthorized()(environ, start_response)
            elif '/.dat' in environ.get('PATH_INFO'):
                # Let's not leak private dat keys
                return Unauthorized()(environ, start_response)
        elif environ.get('REQUEST_METHOD') == 'GET':
            # Let's redirect to static route
            filename = environ.get(
                'PATH_INFO')[environ.get('PATH_INFO').find('/') + 1:]
            if '/.dat' in environ.get('PATH_INFO'):
                # Let's not leak private dat keys
                return Unauthorized()(environ, start_response)
            if path and os.path.exists(os.path.join(workspace_dir, filename)):
                pass
            elif path:
                if filename[len(path) + 1:] != 'index.html':
                    environ['PATH_INFO'] = '/' + filename[len(path) + 1:]
                    response = static.Cling(web_app_dir)
                    return response(environ, start_response)
        elif environ.get('PATH_INFO').count('/') < 2 and \
                environ.get('REQUEST_METHOD') == 'DELETE':
            # Let's disallow removing project directories
            return Unauthorized()(environ, start_response)
        elif environ.get('PATH_INFO').count('/') < 2 and \
                environ.get('REQUEST_METHOD') == 'MKCOL':
            dirname = os.path.join(workspace_dir, environ.get('PATH_INFO'))
            if os.path.exists(dirname):
                response = Response('Already exists.')
                return response(environ, start_response)
        return self.app(environ, custom_start_response)


def start_server():
    launch_file_monitor()
    provider = FilesystemProvider(workspace_dir)
    config = DEFAULT_CONFIG.copy()
    config.update({
        "mount_path": "/dav",
        "provider_mapping": {"/": provider},
        "dir_browser": {"enable": True,
                        "response_trailer": response_trailer},
        "user_mapping": {},
        "verbose": 2,
    })
    dav_app = WsgiDAVApp(config)
    cors_dav_app = CORS(dav_app, headers="*",
                        methods="*", maxage="180", origin="*")
    # CORS middleware doesn't like exc_info
    filtered_dav_app = DAVFilterMiddleWare(cors_dav_app)
    filtered_dav_app = GzipMiddleware(
        filtered_dav_app,
        mime_types=['application/javascript', 'application/x-rapyd',
                    'application/xml', 'image/svg+xml', 'text/*'])
    app.wsgi_app = DispatcherMiddleware(app.wsgi_app, {
        '/dav': filtered_dav_app
    })
    socketio.run(app, host='0.0.0.0', port=54991)


pathSize = len(workspace_dir) + 1


class EventHandler(pyinotify.ProcessEvent):

    def process_IN_CREATE(self, event):  # simplify with a default handler, DRY
        room = event.path[pathSize:]
        socketio.emit('jappyEvent', {'event': 'file-create',
                                     'data': {
                                         'filename': event.name}
                                     }, room=room, broadcast=True)

    def process_IN_DELETE(self, event):
        room = event.path[pathSize:]
        socketio.emit('jappyEvent', {'event': 'file-delete',
                                     'data': {
                                         'filename': event.name}
                                     }, room=room, broadcast=True)

    def process_IN_CLOSE_WRITE(self, event):
        room = event.path[pathSize:]
        socketio.emit('jappyEvent', {'event': 'file-update',
                                     'data': {
                                         'filename': event.name}
                                     }, room=room, broadcast=True)

    def process_IN_MOVED_TO(self, event):
        room = event.path[pathSize:]
        socketio.emit('jappyEvent', {'event': 'file-rename',
                                     'data': {
                                         # 'src_file':event.src_pathname
                                         #  ^ isn't always defined
                                         'filename': event.name}
                                     }, room=room, broadcast=True)


def launch_file_monitor():
    print('Starting file monitor...')
    mask = pyinotify.IN_DELETE | pyinotify.IN_CREATE |\
        pyinotify.IN_CLOSE_WRITE | pyinotify.IN_MOVED_TO
    wm = pyinotify.WatchManager()
    notifier = pyinotify.ThreadedNotifier(wm, EventHandler())
    wm.add_watch(workspace_dir, mask, rec=True, auto_add=True)
    notifier.start()


if __name__ == "__main__":
    start_server()
