// src/components/Header.js

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null); // Reference for the menu container

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener on cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span className="menu-icon">&#9776;</span> {/* Hamburger Icon */}
        </button>
        <nav
          ref={menuRef} // Attach the ref to the nav element
          className={`header-nav ${isMobileMenuOpen ? "open" : ""}`}
        >
          <ul className="header-nav-list">
            <li className="header-nav-item">
              <Link
                to="/services"
                className="header-nav-link"
                onClick={toggleMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="header-nav-item">
              <Link
                to="/portfolio"
                className="header-nav-link"
                onClick={toggleMobileMenu}
              >
                Portfolio
              </Link>
            </li>
            <li className="header-nav-item">
              <Link
                to="/about"
                className="header-nav-link"
                onClick={toggleMobileMenu}
              >
                About
              </Link>
            </li>
            <li className="header-nav-item">
              <Link
                to="/contact"
                className="header-nav-link"
                onClick={toggleMobileMenu}
              >
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
