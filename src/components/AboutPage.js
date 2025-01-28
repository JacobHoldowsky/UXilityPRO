// src/components/AboutPage.js

import React from "react";
import "./AboutPage.css";
import { FaUserTie, FaLightbulb, FaUsers, FaCogs } from "react-icons/fa";

function AboutPage() {
  return (
    <div className="about-page">
      <section className="introduction-section">
      <h2 className="section-title">About Us</h2>
        <div className="introduction-content">
          <img
            src="UXilityPROLogoBest.svg"
            alt="Introduction"
            className="introduction-image"
          />
          <div className="introduction-text">

            <p className="section-text">
              Welcome to UXilityPRO, where we specialize in creating beautiful, functional, and user-friendly websites that help businesses thrive online. Our team of experienced designers and developers is dedicated to delivering high-quality web solutions tailored to your unique needs.
            </p>
          </div>
        </div>
      </section>

      <section className="founder-section">
        <h2 className="section-title">Meet the Founder</h2>
        <div className="founder-content">
          <img src="me.jpeg" alt="Yaakov Holdowsky" className="founder-image" />
          <div className="founder-info">
            <h3 className="founder-name">Yaakov Holdowsky</h3>
            {/* <p className="founder-title">Founder</p> */}
            <p className="founder-description">
              As the driving force behind UXilityPRO, I bring a wealth of
              experience in web design and development, specializing in
              intuitive and visually compelling websites. My background in
              software engineering allows me to create robust, scalable
              solutions tailored to meet the unique needs of each client. At
              UXilityPRO, we are committed to delivering top-tier user
              experiences and taking every project to new heights.
            </p>
          </div>
        </div>
      </section>

      <section className="values-section">
        <h2 className="section-title">Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <FaUserTie className="value-icon" />
            <h3 className="value-title">User-Centricity</h3>
            <p className="value-text">
              We prioritize the needs and preferences of users to ensure
              intuitive and engaging experiences.
            </p>
          </div>
          <div className="value-card">
            <FaLightbulb className="value-icon" />
            <h3 className="value-title">Innovation</h3>
            <p className="value-text">
              We embrace creativity and new technologies to push the boundaries
              of user experience design.
            </p>
          </div>
          <div className="value-card">
            <FaCogs className="value-icon" />
            <h3 className="value-title">Craftsmanship</h3>
            <p className="value-text">
              We pride ourselves on meticulous attention to detail, delivering
              polished and high-quality interfaces.
            </p>
          </div>
          <div className="value-card">
            <FaUsers className="value-icon" />
            <h3 className="value-title">Collaboration</h3>
            <p className="value-text">
              We work closely with clients to co-create experiences that exceed
              expectations.
            </p>
          </div>
        </div>
      </section>

      <section className="approach-section">
        <h2 className="section-title">Our Approach</h2>
        <div className="approach-steps">
          <div className="approach-step">
            <div className="step-number">1</div>
            <h3 className="step-title">Discovery</h3>
            <p className="step-text">
              We start by thoroughly understanding client objectives, target
              audience, and project requirements through detailed discussions
              and research.
            </p>
          </div>
          <div className="approach-step">
            <div className="step-number">2</div>
            <h3 className="step-title">Design</h3>
            <p className="step-text">
              We craft creative solutions that prioritize user experience,
              visual appeal, and functionality while aligning with the client’s
              brand.
            </p>
          </div>
          <div className="approach-step">
            <div className="step-number">3</div>
            <h3 className="step-title">Development</h3>
            <p className="step-text">
              We bring designs to life, leveraging the latest technologies and
              best practices to build robust, scalable solutions.
            </p>
          </div>
          <div className="approach-step">
            <div className="step-number">4</div>
            <h3 className="step-title">Delivery & Support</h3>
            <p className="step-text">
              We provide ongoing support and maintenance to ensure the success
              of our projects, including updates, troubleshooting, and
              enhancements.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
