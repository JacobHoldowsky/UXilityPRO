import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the styles
import "./ContactPage.css"; // Import the CSS file for styling

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let error = "";

    // Email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "email" && !emailPattern.test(value)) {
      error = "Invalid email address";
    }

    setFormData({
      ...formData,
      [name]: value,
      error: error,
    });
  };

  const apiUrl =
    process.env.NODE_ENV === "development" ? "http://localhost:5000" : "";

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Disable the submit button to prevent double submission
    const submitButton = e.target.querySelector('input[type="submit"]');
    submitButton.disabled = true;

    try {
      const token = process.env.VERCEL_ACCESS_TOKEN; // Access the environment variable
      const response = await fetch(apiUrl + "/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        toast.success(data.message); // Success notification
        setFormData({
          name: "",
          email: "",
          number: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error.message);
      toast.error("Failed to send email"); // Error notification
    } finally {
      // Re-enable the submit button after submission is processed
      submitButton.disabled = false;
    }
  };

  return (
    <div className="container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
     
        <label htmlFor="number">Number</label>
        <input
          type="number"
          id="number"
          name="number"
          value={formData.number}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          required
        ></textarea>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ContactForm;
