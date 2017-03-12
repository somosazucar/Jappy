from flask import Flask
from flask import redirect

app = Flask(__name__)

@app.route("/")
def hello():
    return redirect("static/app.html")

if __name__ == "__main__":
    app.run(host="0.0.0.0")

