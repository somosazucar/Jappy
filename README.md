
Jappy.activity
==============

Jappy is a Python collaborative programming environment for the Web. It's also possible to write and preview HTML and Markdown text.

It currently implements the [RapydScript-NG transpiler](https://github.com/kovidgoyal/rapydscript-ng)'s Python-like language.

Jappy is the app powering the http://educa.juegos/ collaborative coding platform.

## Usage

Write Python in Jappy and press the green button **"Run"** to run your code.

What actually happens is:
    - The content of every file is stored (to localStorage or the backend)
    - The code is transpiled from Python3-like syntax to Javascript
    - A preset `template.html` file is loaded to the right hand side frame
    - The Python-compiled-to-Javascript is appended to the frame
    - The resulting HTML with Javascript is stored to the backend as `.index.html`
    - The Javascript then runs
    - Backend peers are notified to load `.index.html` into their frame

### Experimental persistence and collaboration backend

Users may create persistent projects by adding a hashtag to the URL.

For the case of **educa.juegos** an url could look like [https://educa.juegos/#sandbox](https://educa.juegos/#sandbox). When the backend collaboration server is available, a **project folder** toolbar menu provides access to files stored in the server. Text should become synchronized accross users. When one user compiles and runs, everybody else will see the result instantly.

Project files will be accesible via WebDAV (link provided at the end of the Folder toolbar menu).

### Altering the default template

It is possible to open the file `template.html` which you can open from the examples toolbar menu. If a file called `template.html` is open, it will be used over the default. Here you can alter the resulting HTML however you prefer, including adding custom CSS or Javascript libraries.

### Support for HTML and Markdown

If you attempt to "run" an HTML file, it will be rendered to the right hand side frame. Markdown text files (ending with `.md`) will be rendered with a custom style.

### Launch

In order to launch the app, simply open `Jappy.activity/index.html` in a browser, served by http.

The collaboration server is implemented in Flask.

```
python2 server.py
```
And then open http://localhost:54991/#Sandbox (change the hash reference to your project name).

You may need to install requirements with `pip install -r requirements.txt` first. 

Collaboration feature are available when using a #hash in your URL. Each #hash represents a "room" and a "project". Each project has a directory under `workspace/`.

### Standalone

You may also try our experimental standalone app:

```
python webview.py
```

This version is run with a WebKitGTK browser and only been tested on GNU/Linux.

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

Plans
=====

- To support some kind of manifest file editing
- To properly save a session
- To import remote files (not only from open tabs)
