[app]
title = Jappy
package.name = jappy
package.domain = org.somosazucar
android.permissions = INTERNET
android.api = 19
android.sdk = 23
android.ndk_path = ~/.buildozer/android/platform/crystax-ndk-r10.3.2/
android.ndk = 10.3.2
fullscreen = 1
source.exclude_dirs = node_modules,dist
source.exclude_patterns = node_modules/*,dist/*
source.dir = .
source.include_exts = py,png,js,html,pyj,css,svg,json,woff,ttf
version = 1.1
requirements = python3crystax,Flask,Flask-SocketIO,werkzeug,jinja2,markupsafe,itsdangerous,click,python-socketio,python-engineio,six,WsgiDAV,defusedxml,eventlet
orientation = all
presplash.filename = Jappy.activity/activity/app-icon.png
icon.filename = Jappy.activity/activity/app-icon.png
p4a_source_dir = ../python-for-android/
p4a.bootstrap = webview
#android.arch = armeabi-v7a
#android.copy_libs = 1
#android.arch = x86
#android.add_libs_armeabi = libs/android/*.so
#android.add_libs_armeabi_v7a = libs/android-v7/*.so
#android.add_libs_x86 = "libs/android-x86/*.so"
#android.add_libs_mips = libs/android-mips/*.so

[buildozer]
log_level = 2
warn_on_root = 1
bin_dir = ./Jappy.activity/dist/
