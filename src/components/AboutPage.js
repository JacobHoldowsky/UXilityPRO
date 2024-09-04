import React from "react";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="about-about-page">
      <section className="about-section-introduction">
        <h2>Welcome to UXilityPRO</h2>
        <p>
          At UXilityPRO, we are dedicated to crafting visually stunning and
          highly functional websites that help small businesses thrive online.
          Our mission is to deliver innovative solutions paired with exceptional
          service, ensuring every client achieves their digital goals with ease.
        </p>
      </section>

      <section className="about-section-team">
        <h2>Meet The Founder</h2>
        <div className="about-team-member">
          <img
            className="about-team-member-image"
            src="me.jpeg"
            alt="Yaakov Holdowsky"
          />
          <div className="about-team-member-info">
            <h3>Yaakov Holdowsky</h3>
            <p>Founder</p>
            <p>
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

      <section className="about-section-values">
        <h2>Our Core Values</h2>
        <p>
          We are driven by our passion for creating exceptional user
          experiences. Our core values guide every project:
        </p>
        <ul>
          <li>
            <strong>User-Centricity:</strong> We prioritize the needs and
            preferences of users to ensure intuitive and engaging experiences.
          </li>
          <li>
            <strong>Innovation:</strong> We embrace creativity and new
            technologies to push the boundaries of user experience design.
          </li>
          <li>
            <strong>Craftsmanship:</strong> We pride ourselves on meticulous
            attention to detail, delivering polished and high-quality
            interfaces.
          </li>
          <li>
            <strong>Collaboration:</strong> We work closely with clients and
            stakeholders to co-create experiences that exceed expectations.
          </li>
          <li>
            <strong>Continuous Improvement:</strong> We are committed to ongoing
            learning, staying current with trends and best practices in UX
            design.
          </li>
        </ul>
      </section>

      <section className="about-section-approach">
        <h2>Our Approach</h2>
        <p>
          Our approach to each project is centered around understanding our
          clients' needs and delivering innovative solutions that surpass
          expectations. Here’s how we do it:
        </p>
        <ol>
          <li>
            <strong>Discovery:</strong> We start by thoroughly understanding
            client objectives, target audience, and project requirements through
            detailed discussions and research.
          </li>
          <li>
            <strong>Design:</strong> We craft creative solutions that prioritize
            user experience, visual appeal, and functionality while aligning
            with the client’s brand.
          </li>
          <li>
            <strong>Development:</strong> We bring designs to life, leveraging
            the latest technologies and best practices to build robust, scalable
            solutions.
          </li>
          <li>
            <strong>Delivery & Support:</strong> We provide ongoing support and
            maintenance to ensure the success of our projects, including
            updates, troubleshooting, and enhancements.
          </li>
        </ol>
      </section>
    </div>
  );
}

export default AboutPage;
