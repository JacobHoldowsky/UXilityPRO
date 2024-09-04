// src/components/Header.js

import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo">
          <img
            className="header-logo-img"
            src="UXilityPROLogo.png"
            alt="UXilityPRO Logo"
          />
        </Link>
        <nav className="header-nav">
          <ul className="header-nav-list">
            <li className="header-nav-item">
              <Link to="/services" className="header-nav-link">
                Services
              </Link>
            </li>
            <li className="header-nav-item">
              <Link to="/portfolio" className="header-nav-link">
                Portfolio
              </Link>
            </li>
            <li className="header-nav-item">
              <Link to="/about" className="header-nav-link">
                About
              </Link>
            </li>
            <li className="header-nav-item">
              <Link to="/contact" className="header-nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
