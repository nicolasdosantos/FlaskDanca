from flask import Flask, render_template
app = Flask(__name__)


@app.route('/')
def main():
    return render_template("main.html")

@app.route('/estilos')
def estilos():
    return render_template("estilos.html")

@app.route('/conhecer')
def conhecer():
    return render_template("conhecer.html")

@app.route('/prof')
def prof():
    return render_template("professores.html")

@app.route('/video')
def video():
    return render_template("video.html")


if __name__ == '__main__':
    app.run()