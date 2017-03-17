#!/usr/bin/env python3

from flask import Flask
from flask import redirect

app = Flask(__name__, static_folder="web")

@app.route("/")
def hello():
    return redirect("web/app.html")

if __name__ == "__main__":
    app.run(host="0.0.0.0")

