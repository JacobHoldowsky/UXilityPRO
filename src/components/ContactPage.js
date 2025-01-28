// src/components/ContactForm.js

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ContactPage.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  // Environment-based API URL
  const apiUrl =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:5000/send-email' // When running locally
      : '/api/send-email'; // When deployed

  // Handle input changes with validation
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Reset error for the field
    setErrors({ ...errors, [name]: '' });
    setFormData({ ...formData, [name]: value });
  };

  // Validate form data
  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required.';
    if (!formData.email) {
      tempErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid.';
    }
    if (!formData.number) {
      tempErrors.number = 'Phone number is required.';
    } else if (!/^\+?[0-9]{7,15}$/.test(formData.number)) {
      tempErrors.number = 'Phone number is invalid.';
    }
    if (!formData.message.trim()) tempErrors.message = 'Message is required.';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    setIsSubmitting(true);

    const companyLogoUrl = 'UXilityPROLogoBest.svg'; // Replace with your company logo URL
    const emailContent = `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <div style="text-align: center; margin-bottom: 20px;">
          <img src="${companyLogoUrl}" alt="Company Logo" style="max-width: 150px;"/>
        </div>
        <h2 style="color: #2a70f8;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone Number:</strong> ${formData.number}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
      </div>
    `;

    const confirmationEmailContent = `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <div style="text-align: center; margin-bottom: 20px;">
          <img src="${companyLogoUrl}" alt="Company Logo" style="max-width: 150px;"/>
        </div>
        <h2 style="color: #2a70f8;">Thank You for Contacting Us</h2>
        <p>Dear ${formData.name},</p>
        <p>Thank you for reaching out to us. We have received your message and will get back to you promptly.</p>
        <p><strong>Your Message:</strong></p>
        <p>${formData.message}</p>
        <p>Best regards,</p>
        <p>Your Company Name</p>
      </div>
    `;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, emailContent, confirmationEmailContent }),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success('Your message has been sent successfully!');
        setFormData({
          name: '',
          email: '',
          number: '',
          message: '',
        });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error.message);
      toast.error('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1 className="contact-title">Let's Elevate Your Online Presence</h1>
        <p className="contact-description">
          We're excited to learn more about your project! Fill out the form below, and we'll get back to you promptly to discuss how we can collaborate and achieve your goals.
        </p>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">
              Name<span className="required">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              aria-invalid={errors.name ? 'true' : 'false'}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Email<span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              aria-invalid={errors.email ? 'true' : 'false'}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="number">
              Phone Number<span className="required">*</span>
            </label>
            <input
              type="tel"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              placeholder="Enter your phone number"
              aria-invalid={errors.number ? 'true' : 'false'}
            />
            {errors.number && <span className="error-message">{errors.number}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="message">
              Message<span className="required">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project"
              rows="5"
              aria-invalid={errors.message ? 'true' : 'false'}
            ></textarea>
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>

          <button type="submit" className="btn-submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
