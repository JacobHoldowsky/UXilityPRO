import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo" aria-label="UXilityPRO Home">
          <img
            className="header-logo-img"
            src="UXilityPROLogoFinalCropped.png"
            alt="UXilityPRO Logo"
          />
        </Link>
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <nav
          ref={menuRef}
          className={`header-nav ${isMobileMenuOpen ? 'open' : ''}`}
          aria-label="Primary Navigation"
        >
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
