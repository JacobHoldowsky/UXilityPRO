from flask import Flask, render_template, request, jsonify
from flask_cors import CORS, cross_origin

from flask_mail import Mail, Message
from dotenv import load_dotenv
import os

app = Flask(__name__)
CORS(app, origins="*")

# Load environment variables from .env file
load_dotenv()

mail_port = os.getenv("MAIL_PORT")
mail_use_config = os.getenv("MAIL_USE_TLS")

# Flask-Mail configuration
app.config["MAIL_SERVER"] = os.getenv("MAIL_SERVER")
if mail_port:
    app.config["MAIL_PORT"] = int(mail_port)
if mail_use_config:
    app.config["MAIL_USE_TLS"] = mail_use_config.lower() == "true"
app.config["MAIL_USERNAME"] = os.getenv("MAIL_USERNAME")
app.config["MAIL_PASSWORD"] = os.getenv("MAIL_PASSWORD")

mail = Mail(app)


@app.route("/")
def index():
    return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True)
