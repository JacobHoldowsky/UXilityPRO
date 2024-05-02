import React, { useEffect, useState } from "react";
import "./Portfolio.css";

function PortfolioPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

  const portfolioDetails = {
    "Pretty Presents by Chana": {
      imageURL: "prettyPresentsLogo.png",
      description: "Professional gift curation business",
    },

    // Add content for other projects here
  };

  const openModal = (content) => {
    setSelectedContent(content);
    setModalOpen(true);
    // Disable scrolling in the background when the modal is open
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    // Enable scrolling in the background when the modal is closed
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    // Cleanup function to enable scrolling in the background when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    // Add or remove 'modal-open' class from body based on modalOpen state
    if (modalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    // Cleanup function to remove the class when component unmounts
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [modalOpen]);

  return (
    <div className="projects-page">
      <h1>Our Portfolio</h1>
      <div className="project-grid">
        {Object.keys(portfolioDetails).map((project) => (
          <div className="project-category" key={project}>
            <div className="project">
              <img
                src={portfolioDetails[project].imageURL}
                alt="project"
                onClick={() =>
                  window.open("https://prettypresentsbychana.com", "_blank")
                }
              />
              <p>{portfolioDetails[project]["description"]}</p>
              <button
                onClick={() =>
                  window.open("https://prettypresentsbychana.com", "_blank")
                }
                className="btn-primary"
              >
                Visit now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortfolioPage;
