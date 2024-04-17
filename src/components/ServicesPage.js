import React from "react";
import "./ServicesPage.css";
import { Link } from "react-router-dom";

function ServicesPage() {
  return (
    <div className="services-page">
      <section className="service-category">
        <h2>Web Design</h2>
        <div className="service">
          <h3>Custom Website Design</h3>
          <p>Create a unique online presence tailored to your brand</p>
          <Link
            to={{
              pathname: "/services/custom-website-design",
              state: {
                title: "Custom Website Design",
                description:
                  "Create a unique online presence tailored to your brand",
              },
            }}
            className="btn-primary"
          >
            Learn More
          </Link>
        </div>

        {/* Add more services within this category */}
      </section>

      <section className="service-category">
        <h2>Web Development</h2>
        <div className="service">
          <h3>Responsive Web Development</h3>
          <p>Build websites optimized for all devices and screen sizes</p>
          <a
            href="/services/responsive-web-development"
            className="btn-primary"
          >
            Learn More
          </a>
        </div>

        {/* Add more services within this category */}
      </section>

      <section className="service-category">
        <h2>Hosting and Serving</h2>
        <div className="service">
          <h3>Website Hosting</h3>
          <p>Reliable hosting solutions to keep your website online 24/7</p>
          <a href="/services/website-hosting" className="btn-primary">
            Learn More
          </a>
        </div>

        <div className="service">
          <h3>Content Delivery Network (CDN)</h3>
          <p>Accelerate your website's performance with a global CDN</p>
          <a href="/services/cdn" className="btn-primary">
            Learn More
          </a>
        </div>

        {/* Add more services within this category */}
      </section>

      {/* Add more service categories as needed */}
    </div>
  );
}

export default ServicesPage;
