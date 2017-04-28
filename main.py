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

try:
    from urllib import parse as urlparse
except ImportError:
    import urlparse

if 'ANDROID_ARGUMENT' in os.environ:
    _ANDROID = True
else:
    _ANDROID = False

if sys.platform=='linux2':
    reload(sys)
    sys.setdefaultencoding('utf-8')
if sys.platform.startswith('linux') and not _ANDROID:
    import threading
    import gi
    gi.require_version('WebKit2', '4.0')
    from gi.repository import WebKit2
    from gi.repository import Gtk
    from gi.repository import Gio

    import signal
    signal.signal(signal.SIGINT, signal.SIG_DFL)

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
    Gtk.main_quit()
    return 'Bye!'

@socketio.on('connect', namespace='/test')
def test_connect():
    emit('my response', {'data': 'Connected'})

@socketio.on('disconnect', namespace='/test')
def test_disconnect():
    print('Client disconnected')

def start_server():
    bundle_dir = os.path.dirname(os.path.realpath(__file__))
    provider = FilesystemProvider(bundle_dir)
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


def start_webview():
    def _app_scheme_cb(request, user_data):
        uri = request.get_path()
        with app.test_client() as c:
            response = c.get(uri) # TODO: instead, use c.open stream
            if response.status_code==302: # Handle redirect
                new_uri = urlparse.urlparse(response.location)
                new_uri = 'activity://127.0.0.1' + new_uri.path +\
                                    new_uri.params + new_uri.query
                request.get_web_view().load_uri(new_uri)
            data, mime = response.data, response.mimetype
        input_stream = Gio.MemoryInputStream.new_from_data(data, None)
        #request.finish(Gio.File.new_for_path(path).read(None),
        #               -1, Gio.content_type_guess(path, None)[0])
        request.finish( input_stream, len(data), mime )

    context = WebKit2.WebContext.get_default()
    context.register_uri_scheme("activity", _app_scheme_cb, None)

    window = Gtk.Window()
    window.set_default_size(800, 600)
    window.maximize()
    web_view = WebKit2.WebView()
    #web_view.connect("load-changed", _loading_changed_cb)
    #web_view.connect('run-file-chooser', __run_file_chooser)

    window.add(web_view)

    settings = web_view.get_settings()
    settings.set_property("enable-developer-extras", True)

    web_view.load_uri("activity://127.0.0.1/")
    window.set_title("Jappy")
    window.show_all()

    window.connect("delete-event", bye)


if __name__ == "__main__":
    if sys.platform.startswith('linux') and not _ANDROID:
        t = threading.Thread(target=start_server)
        t.daemon = True
        t.start()

        start_webview()
        Gtk.main()
    else:
        start_server()

    sys.exit()
