[app]
title = Jappy
package.name = jappy
package.domain = org.somosazucar
android.permissions = INTERNET
android.api = 19
android.sdk = 24
android.ndk = 10e
android.bootstrap = webview
bootstrap = webview
android.p4a_whitelist = encodings/iso8859_15.pyo
fullscreen = 1
source.exclude_dirs = bin,node_modules
source.exclude_patterns = Jappy.activity/node_modules/*,Jappy.activity/dist/*
source.dir = .
source.include_exts = py,png,js,html,pyj,css,svg,json,woff
version = 1
requirements = flask,Flask-SocketIO,python-socketio,python-engineio,six,WsgiDAV,defusedxml
orientation = all
presplash.filename = Jappy.activity/activity/app-icon.png
icon.filename = Jappy.activity/activity/app-icon.png
android.p4a_dir = ../python-for-android/
#android.arch = x86
#android.add_libs_x86 = libs/android-x86/*.so

[buildozer]
log_level = 2
warn_on_root = 1
source.exclude_patterns = Jappy.activity/node_modules/*,Jappy.activity/dist/*
source.exclude_dirs = bin,node_modules
bin_dir = ./Jappy.activity/dist/
