// Import the necessary modules
import React from "react";
import "./LinkedInSection.css";

// Define your LinkedInSection component
function LinkedInSection() {
  return (
    <section className="linkedin-section">
      <div className="linkedin-content">
        {/* Left side with LinkedIn icon */}
        <div className="linkedin-icon">
          <a
            href="https://www.linkedin.com/company/your-company-name"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="fab fa-linkedin fa-6x"
              style={{ color: "#0077b5" }}
            ></i>
          </a>
        </div>
        {/* Right side with text content */}
        <div className="linkedin-text">
          <h2>Connect with Us on LinkedIn</h2>
          <p>
            Stay updated with our latest news and updates by following us on
            LinkedIn.
          </p>
          <a
            href="https://www.linkedin.com/company/your-company-name"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link"
          >
            Follow Us on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

// Export your component
export default LinkedInSection;
