from flask import Flask, render_template, request, url_for, redirect

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/quiz", methods = ["GET", "POST"])
def quiz():
    if request.method == "POST":
        print("OK")
    elif request.method == "GET":
        print("OK")
        return render_template("quiz.html")

if __name__ == "__main__":
    app.run()