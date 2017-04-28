[app]
title = Jappy
package.name = jappy
package.domain = org.somosazucar
android.permissions = INTERNET
android.api = 21
android.sdk = 23
android.ndk = 10e
android.bootstrap = webview
android.p4a_whitelist = encodings/iso8859_15.pyo
source.exclude_dirs = bin,Jappy.activity/node_modules
source.exclude_patterns = Jappy.activity/node_modules/*,Jappy.activity/dist/*
source.dir = .
source.include_exts = py,png,js,html,pyj,css,svg,json
version = 1
requirements = flask,Flask-SocketIO,python-socketio,python-engineio,six,WsgiDAV,defusedxml
orientation = all
presplash.filename = Jappy.activity/activity/app-icon.png
icon.filename = Jappy.activity/activity/app-icon.png

[buildozer]
log_level = 2
warn_on_root = 1
