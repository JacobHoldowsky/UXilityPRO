// src/components/PortfolioPage.js

import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import { FaExternalLinkAlt } from 'react-icons/fa';

function PortfolioPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const portfolioDetails = {
    'T&Bee Liquid Gold': {
      imageURL: 'tnbLiquidGoldLogo-min.png',
      websiteURL: 'https://tandbeeliquidgold.com',
      description:
        'Developed a sophisticated e-commerce platform for T&Bee Liquid Gold, a premium honey brand. The website offers a seamless shopping experience with integrated Stripe payments for secure transactions, AWS-based image storage for optimal performance, and real-time currency conversion for a global audience. The refined UX/UI ensures an intuitive, engaging customer journey from browsing to checkout.',
    },
    'Pretty Presents by Chana': {
      imageURL: 'prettyPresentsLogo-min.png',
      websiteURL: 'https://prettypresentsbychana.com',
      description:
        'Created an online platform for Pretty Presents by Chana, a gift curation service. The site features an elegant and user-friendly design, showcasing curated gift collections. Enhanced with mobile responsiveness and fast loading times, the platform effectively engages customers and boosts brand visibility.',
    },
    // Add more projects here...
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [modalOpen]);

  return (
    <div className="portfolio-page">
      <div className="portfolio-container">
        <h1 className="portfolio-title">Our Portfolio</h1>
        <div className="portfolio-grid">
          {Object.entries(portfolioDetails).map(([projectName, projectData]) => (
            <div className="portfolio-card" key={projectName}>
              <img
                src={projectData.imageURL}
                alt={projectName}
                className="portfolio-image"
                onClick={() => openModal({ projectName, ...projectData })}
              />
              <div className="portfolio-card-content">
                <h3 className="portfolio-card-title">{projectName}</h3>
                <p className="portfolio-card-description">
                  {projectData.description.length > 100
                    ? projectData.description.substring(0, 100) + '...'
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
              <img
                src={selectedProject.imageURL}
                alt={selectedProject.projectName}
                className="modal-image"
              />
              <p className="modal-description">{selectedProject.description}</p>
              <div className="modal-buttons">
                <a
                  href={selectedProject.websiteURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-btn"
                >
                  Visit Website <FaExternalLinkAlt style={{ marginLeft: '8px' }} />
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
