from flask import Flask, render_template, request, jsonify
from flask_cors import CORS

from flask_mail import Mail, Message
from dotenv import load_dotenv
import os

app = Flask(__name__)
CORS(app)

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


@app.route("/send-email", methods=["POST"])
def send_email():
    data = request.get_json()
    name = data["name"]
    email = data["email"]
    message = data["message"]
    msg = Message(
        "New Contact Form Submission",
        sender=os.getenv("MAIL_USERNAME"),
        recipients=[os.getenv("PERSONAL_EMAIL")],
    )
    msg.body = f"Name: {name}\nEmail: {email}\nMessage: {message}"

    print(msg.body)
    try:
        # Explicitly connect to the SMTP server before sending the email
        with app.app_context():
            mail.send(msg)
        return jsonify({"success": True, "message": "Email sent successfully"}), 200
    except Exception as e:
        # Log the error for debugging purposes
        app.logger.error("Failed to send email: %s", e)
        # Return an error response with detailed message
        return jsonify({"success": False, "message": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)
