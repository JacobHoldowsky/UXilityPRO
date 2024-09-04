// src/components/Footer.js

import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section company-info">
          <h3 className="footer-heading">UXilityPRO</h3>
          <p className="footer-description">
            We specialize in crafting beautiful, user-centric websites that help businesses thrive online. Discover how we can elevate your digital presence with cutting-edge solutions tailored to your needs.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section quick-links">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} UXilityPRO. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
