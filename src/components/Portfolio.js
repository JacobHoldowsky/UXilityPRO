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
        "Developed a robust e-commerce platform for T&Bee Liquid Gold, a premium honey business. The website features a seamless shopping experience with Stripe payment integration for secure transactions, AWS for optimized image storage and fast loading times, and dynamic currency conversion that fetches live USD to Shekel exchange rates. With a focus on beautiful UX/UI, the site provides a user-friendly and visually appealing interface, ensuring a smooth and engaging customer journey from browsing to checkout.",
    },

    "Pretty Presents by Chana": {
      imageURL: "prettyPresentsLogo-min.png",
      websiteURL: "https://prettypresentsbychana.com",
      description:
        "Created an online platform for Pretty Presents by Chana, a professional gift curation service. The website is designed to captivate visitors with an elegant and intuitive UX/UI, providing a seamless browsing experience. Key features include an easy-to-navigate catalog showcasing various curated gift collections, a custom-built contact form for personalized gift requests, and integrated social media links to enhance brand presence. Optimized for performance and mobile responsiveness, the website ensures fast loading times and accessibility across all devices, effectively engaging customers and driving business growth.",
    },
    // Add more projects here...
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
    <div className="portfolio-portfolio-page">
      <h1>Our Portfolio</h1>
      <div className="portfolio-portfolio-grid">
        {Object.keys(portfolioDetails).map((project) => (
          <div className="portfolio-portfolio-item" key={project}>
            <div className="portfolio-project-card">
              <img
                src={portfolioDetails[project].imageURL}
                alt={project}
                className="portfolio-project-image"
                onClick={() =>
                  window.open(
                    `${portfolioDetails[project].websiteURL}`,
                    "_blank"
                  )
                }
              />
              <p className="portfolio-project-description">
                {portfolioDetails[project]["description"]}
              </p>
              <button
                onClick={() =>
                  window.open(
                    `${portfolioDetails[project].websiteURL}`,
                    "_blank"
                  )
                }
                className="portfolio-btn-primary"
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
