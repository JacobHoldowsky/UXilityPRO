import React, { useEffect, useState } from "react";
import "./ServicesPage.css";
import { button } from "react-router-dom";
import CustomWebDesignServiceDetails from "./CustomWebDesignServiceDetails";

function ServicesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

  const serviceDetails = {
    "Custom Website Design": {
      header: "Custom Website Design",
      smallDescription:
        "Create a unique online presence tailored to your brand",
      paragraphs: [
        "Elevate your online presence with our custom website design service. Our team of skilled designers will work closely with you to understand your brand identity, target audience, and business goals. Using the latest design trends and technologies, we'll create a stunning website that not only captivates visitors but also drives conversions.",
        "From sleek and modern layouts to intuitive navigation and seamless user experience, our custom websites are tailored to reflect the unique essence of your brand. Whether you're a startup looking to establish your online presence or an established business seeking a website redesign, we've got you covered.",
        "Let us bring your vision to life and turn your website into a powerful tool for growth. Get in touch with us today to discuss your project and take the first step towards a remarkable online presence.",
      ],
    },
    "Responsive Web Development": {
      header: "Responsive Web Development",
      smallDescription:
        "Build websites optimized for all devices and screen sizes",
      paragraphs: [
        "Build websites optimized for all devices and screen sizes with our responsive web development service. Our experienced team ensures that your website looks and functions flawlessly across desktops, laptops, tablets, and smartphones.",
        "Using the latest web technologies and best practices, we create responsive designs that adapt to various screen sizes, resolutions, and orientations. Whether you're launching a new website or upgrading an existing one, we'll help you reach your audience effectively across all devices.",
        "Get in touch with us to learn more about our responsive web development services and take your online presence to the next level.",
      ],
    },
    "Website Hosting": {
      header: "Website Hosting",
      smallDescription:
        "Reliable hosting solutions to keep your website online 24/7",
      paragraphs: [
        "Ensure your website is always online with our reliable website hosting solutions. We offer high-performance hosting services that guarantee uptime and fast loading times for your visitors.",
        "Our hosting packages are designed to meet the needs of businesses of all sizes. Whether you're running a small blog or managing a large e-commerce store, we have the infrastructure and expertise to support your website hosting requirements.",
        "With our secure and scalable hosting solutions, you can focus on growing your online presence while we take care of the technical aspects. Contact us today to learn more about our website hosting services.",
      ],
    },
    "Content Delivery Network (CDN)": {
      header: "Content Delivery Network (CDN)",
      smallDescription:
        "Accelerate your website's performance with a global CDN",
      paragraphs: [
        "Accelerate your website's performance and improve user experience with our Content Delivery Network (CDN) service. By caching content on servers located strategically around the world, we ensure that your website loads quickly for users regardless of their geographic location.",
        "Our CDN minimizes latency and reduces server load, resulting in faster page load times and improved responsiveness. With our global network of servers, you can deliver content to your audience with lightning-fast speed and reliability.",
        "Experience the benefits of a CDN for your website today. Contact us to learn more about how our CDN service can optimize your web performance and enhance user satisfaction.",
      ],
    },
    // Add content for other services here
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

  const handleModalClick = (e) => {
    // Stop event propagation when clicking inside the modal content
    e.stopPropagation();
  };

  return (
    <div className="services-page">
      <div className="service-grid">
        {Object.keys(serviceDetails).map((serviceName) => (
          <div className="service-category" key={serviceName}>
            <div className="service">
              <h3>{serviceName}</h3>
              <p>{serviceDetails[serviceName]["smallDescription"]}</p>
              <button
                onClick={() => openModal(serviceDetails[serviceName])}
                className="btn-primary"
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={handleModalClick}>
            <div>
              <h2>{selectedContent.header}</h2>
              {selectedContent.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="modal-buttons">
              <button onClick={closeModal} className="btn-primary">
                Close
              </button>
              <button
                onClick={() => (window.location.href = "/contact")}
                className="btn-primary"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ServicesPage;