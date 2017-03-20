#!/usr/bin/env python3

from flask import Flask
from flask import redirect

app_dir = "Jappy.activity"

app = Flask(__name__, static_folder=app_dir)

@app.route("/")
def hello():
    return redirect(app_dir)

if __name__ == "__main__":
    app.run(host="0.0.0.0")

