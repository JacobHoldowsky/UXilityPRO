const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Enable CORS
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_SERVER,
  port: process.env.MAIL_PORT,
  secure: process.env.MAIL_USE_TLS === "true",
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
});

// Define routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/send-email", async (req, res) => {
  const { name, email, number, message } = req.body;

  const mailOptions = {
    from: process.env.MAIL_USERNAME,
    to: `${process.env.PERSONAL_EMAIL}, ${email}`,
    subject: "New Contact Form Submission",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <img src="https://yourdomain.com/path/to/UXilityPROLogoBest.svg" alt="UXilityPRO Logo" style="width: 150px;"/>
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Number:</strong> ${number}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <br/>
        <p>Best regards,</p>
        <p>UXilityPRO Team</p>
      </div>
    `,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Failed to send email:", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
