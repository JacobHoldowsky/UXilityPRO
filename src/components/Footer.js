// src/components/Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import WhatsAppButton from "./WhatsAppButton";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          {/* Company Info */}
          <div className="footer-section company-info">
            <h3 className="footer-heading">UXilityPRO</h3>
            <p className="footer-description">
              We specialize in crafting beautiful, custom, user-centric websites that help
              businesses thrive online. Discover how we can elevate your digital
              presence with cutting-edge solutions tailored to your needs.
            </p>
            {/* <div className="footer-social">
              <a
                href="https://www.facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div className="footer-section quick-links">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="footer-link">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} UXilityPRO. All rights reserved.
          </p>
        </div>
      </footer>
      <WhatsAppButton />
    </>
  );
};

export default Footer;
