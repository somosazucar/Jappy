Jappy.activity
==============

Jappy is a Python collaborative programming environment for the Web. It's also possible to write and preview HTML.

It currently implements the [RapydScript-NG transpiler](https://github.com/kovidgoyal/rapydscript-ng)'s Python-like language.

Jappy is the app powering the http://educa.juegos/ collaboration platform.

## Development

### Launch

In order to launch the app, simply open `Jappy.activity/index.html` in a browser, served by http.

The collaboration server is implemented in Flask.

```
python server.py
```
And then open http://localhost:54991/#Jappy

You may need to install requirements with `pip install -r requirements.txt` first. 

Collaboration feature are available when using a #hash in your URL. Each #hash represents a "room" and a "project". Each project has a directory under `workspace/`.

### Standalone

You may also try our experimental standalone app:

```
python webview.py
```

## References

https://wiki.sugarlabs.org/go/Project/Develop_Activity

Artisan Workbench
=================

The philosophy of Jappy is to facilitate tools and lower barriers to achieve understanding of web technologies.

Where possible it aims for simplicity and clean design.

*Shall work with Sugar and Sugarizer, deploy everywhere.*

Web Apps for Sugarizer and any Platform

 - Python
 - Game
 - Tool

Collaboration, Simplicity, Reflection
    "Never loose work"

Issues
======

- Might consider method to avoid *infinite loops*. Currently they **crash the tab or browser or PC**.
