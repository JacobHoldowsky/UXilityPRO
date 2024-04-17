// ContactPage.js
import React from 'react';
import './ContactPage.css'; // Import CSS file for styling

function ContactPage() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        Have questions or inquiries? Feel free to reach out to us using the
        form below or contact us directly via email or phone.
      </p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactPage;
