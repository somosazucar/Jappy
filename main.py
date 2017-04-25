#!/usr/bin/env python3

from flask import Flask
from flask import redirect
from flask_socketio import SocketIO, emit


import sys
import threading
if sys.platform==linux2:
    from gi.repository import WebKit2
    from gi.repository import Gtk

import signal
signal.signal(signal.SIGINT, signal.SIG_DFL)

app_dir = "Jappy.activity"

app = Flask(__name__, static_folder=app_dir)
socketio = SocketIO(app)

@app.route("/")
def hello():
    return redirect(app_dir + "/index.html")

@socketio.on('connect', namespace='/test')
def test_connect():
    emit('my response', {'data': 'Connected'})

@socketio.on('disconnect', namespace='/test')
def test_disconnect():
    print('Client disconnected')

def start_server():
    socketio.run(app, host='127.0.0.1')

def start_webview():
    window = Gtk.Window()
    window.set_default_size(800, 600)
    web_view = WebKit2.WebView()
    #web_view.connect("load-changed", _loading_changed_cb)
    #web_view.connect('run-file-chooser', __run_file_chooser)

    window.add(web_view)

    settings = web_view.get_settings()
    settings.set_property("enable-developer-extras", True)

    web_view.load_uri("http://127.0.0.1:5000")
    window.set_title("Jappy")
    window.show_all()

    window.connect("delete-event", Gtk.main_quit)


if __name__ == "__main__":
    if sys.platform == 'linux2':
        t = threading.Thread(target=start_server)
        t.daemon = True
        t.start()

        start_webview()
        Gtk.main()
    else:
        start_server()

    sys.exit()
