import os
import sys
try:
    from urllib import parse as urlparse
except ImportError:
    import urlparse

from server import start_server, bye, app

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

    def shutdown(*args):
        bye()
        if not _ANDROID:
            Gtk.main_quit()
    window.connect("delete-event", shutdown)


if __name__ == "__main__":
    if sys.platform.startswith('linux') and not _ANDROID:
        t = threading.Thread(target=start_server)
        t.daemon = True
        t.start()

        start_webview()
        Gtk.main()
    sys.exit()
