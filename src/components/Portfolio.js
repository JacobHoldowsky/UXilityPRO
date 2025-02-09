// src/components/PortfolioPage.js

import React, { useState, useEffect } from "react";
import "./Portfolio.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Coffee } from 'lucide-react';

function PortfolioPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const portfolioDetails = {
    "T&Bee Liquid Gold": {
      imageURL: "tnbLiquidGoldLogo-min.png",
      websiteURL: "https://tandbeeliquidgold.com",
      description:
        "Developed a sophisticated e-commerce platform for T&Bee Liquid Gold, a premium honey brand. The website offers a seamless shopping experience with integrated Stripe payments for secure transactions, AWS-based image storage for optimal performance, and real-time currency conversion for a global audience. The refined UX/UI ensures an intuitive, engaging customer journey from browsing to checkout.",
    },
    "Power Coffeeworks": {
      imageComponent: < Coffee className="portfolio-image" />,
      websiteURL: "https://gregarious-trifle-73e06e.netlify.app/",
      description:
        "Developed a modern, feature-rich e-commerce platform for Power CoffeeWorks, offering a seamless shopping experience with a robust set of functionalities. The site includes a fully integrated shopping cart, a user-friendly contact form, and a comprehensive admin console for managing products, tracking orders, and updating website content in real time. Customers can switch effortlessly between English and Hebrew with a single click, ensuring accessibility for a broader audience.",
    },
    "Roots Rockland": {
      imageURL: "rootsLogo2.png",
      websiteURL: "https://rootsrockland.com",
      description:
        "Designed and developed a professional website for Roots Rockland, a therapy practice. The site features a calming and welcoming design, providing information about services, therapist profiles, and appointment scheduling. Enhanced with mobile responsiveness and fast loading times, the platform ensures a smooth user experience for clients seeking mental health support.",
    },
    "UXilityPRO": {
      imageURL: "UXilityPROLogoBest.svg",
      websiteURL: "https://uxilitypro.com",
      description:
        "Created a comprehensive digital presence for UXilityPRO, a company specializing in user experience optimization. The website showcases the company's services, portfolio, and client testimonials, all within a sleek and modern design. Features include a responsive layout, fast loading times, and an intuitive navigation system, ensuring a seamless user experience across all devices.",
    },
    // Add more projects here...
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [modalOpen]);

  return (
    <div className="portfolio-page">
      <div className="portfolio-container">
        <h1 className="portfolio-title">Our Portfolio</h1>
        <div className="portfolio-grid">
          {Object.entries(portfolioDetails).map(([projectName, projectData]) => (
            <div className="portfolio-card" key={projectName}>
              {projectData.imageURL ? ( // If it's an image URL, render an img tag
                <img
                  src={projectData.imageURL}
                  alt={projectName}
                  className="portfolio-image"
                  onClick={() => openModal({ projectName, ...projectData })}
                />
              ) : (
                projectData.imageComponent // If it's JSX, render it directly
              )}

              <div className="portfolio-card-content">
                <h3 className="portfolio-card-title">{projectName}</h3>
                <p className="portfolio-card-description">
                  {projectData.description.length > 100
                    ? projectData.description.substring(0, 100) + "..."
                    : projectData.description}
                </p>
                <button
                  onClick={() => openModal({ projectName, ...projectData })}
                  className="portfolio-btn"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>

      {modalOpen && selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={closeModal}
              aria-label="Close Modal"
            >
              &times;
            </button>
            <div className="modal-content">
              <h2 className="modal-title">{selectedProject.projectName}</h2>
              {selectedProject.imageURL ? ( // If it's an image URL, render an img tag
                <img
                  src={selectedProject.imageURL}
                  alt={selectedProject.projectName}
                  className="portfolio-image"
                />
              ) : (
                selectedProject.imageComponent // If it's JSX, render it directly
              )}
              <p className="modal-description">{selectedProject.description}</p>
              <div className="modal-buttons">
                <a
                  href={selectedProject.websiteURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-btn"
                >
                  Visit Website{" "}
                  <FaExternalLinkAlt style={{ marginLeft: "8px" }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PortfolioPage;
