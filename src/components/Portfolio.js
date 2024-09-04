import React, { useEffect, useState } from "react";
import "./Portfolio.css";

function PortfolioPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

  const portfolioDetails = {
    "T&Bee Liquid Gold": {
      imageURL: "tnbLiquidGoldLogo-min.png",
      websiteURL: "https://tandbeeliquidgold.com",
      description:
        "Developed a sophisticated e-commerce platform for T&Bee Liquid Gold, a premium honey brand. The website offers a seamless shopping experience with integrated Stripe payments for secure transactions, AWS-based image storage for optimal performance, and real-time currency conversion for a global audience. The refined UX/UI ensures an intuitive, engaging customer journey from browsing to checkout.",
    },
    "Pretty Presents by Chana": {
      imageURL: "prettyPresentsLogo-min.png",
      websiteURL: "https://prettypresentsbychana.com",
      description:
        "Created an online platform for Pretty Presents by Chana, a gift curation service. The site features an elegant and user-friendly design, showcasing curated gift collections. Enhanced with mobile responsiveness and fast loading times, the platform effectively engages customers and boosts brand visibility.",
    },
    // Add more projects here...
  };

  useEffect(() => {
    // Enable scrolling when the modal is closed
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    // Toggle 'modal-open' class on the body element based on modal state
    if (modalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    // Cleanup to remove the class when the component unmounts
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [modalOpen]);

  return (
    <div className="portfolio-page">
      <h1 className="portfolio-title">Our Portfolio</h1>
      <div className="portfolio-grid">
        {Object.entries(portfolioDetails).map(([projectName, projectData]) => (
          <div className="portfolio-item" key={projectName}>
            <div className="portfolio-card">
              <img
                src={projectData.imageURL}
                alt={projectName}
                className="portfolio-image"
                onClick={() => window.open(projectData.websiteURL, "_blank")}
              />
              <p className="portfolio-description">{projectData.description}</p>
              <button
                onClick={() => window.open(projectData.websiteURL, "_blank")}
                className="portfolio-button"
              >
                Visit Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortfolioPage;
