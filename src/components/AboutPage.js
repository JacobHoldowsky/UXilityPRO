import React from "react";
import "./AboutPage.css"; // Import your CSS file

function AboutPage() {
  return (
    <div className="about-page">
      <section className="section-introduction">
        <h2>Welcome to UXilityPRO</h2>
        <p>
          At UXilityPRO, we are passionate about creating stunning websites that
          help small businesses succeed online. Our mission is to provide
          innovative solutions and exceptional service to every client we serve.
        </p>
      </section>

      <section className="section-team">
        <h2>Our Team</h2>
        <div className="team-member">
          <img className="team-member-image" src="me.jpeg" alt="Your Name" />
          <div className="team-member-info">
            <h3>Yaakov Holdowsky</h3>
            <p>Role: Founder & Owner</p>
            <p>
              Bio: As the founder and owner of UXilityPRO, I bring years
              of experience in web design and development, with a focus on
              creating intuitive and visually stunning websites. My background
              in software engineering enables me to deliver robust and scalable
              solutions tailored to our clients' needs. At UXilityPRO, my
              passion for delivering exceptional user experiences drives our
              commitment to excellence in every project we undertake.
            </p>
          </div>
        </div>
      </section>

      <section className="section-values">
        <h2>Our Values</h2>
        <p>
          At UXilityPRO, we are driven by our passion for delivering exceptional
          user experiences. Our core values reflect this commitment:
        </p>
        <ul>
          <li>
            User-Centricity: We prioritize the needs and preferences of users in
            everything we create, ensuring intuitive and delightful experiences.
          </li>
          <li>
            Innovation: We embrace creativity and innovation to push the
            boundaries of user experience design, constantly seeking new ways to
            delight and engage users.
          </li>
          <li>
            Craftsmanship: We take pride in our craft, paying meticulous
            attention to detail and craftsmanship to deliver polished and
            high-quality user interfaces.
          </li>
          <li>
            Collaboration: We believe in the power of collaboration, working
            closely with our clients and stakeholders to co-create user
            experiences that exceed expectations.
          </li>
          <li>
            Continuous Improvement: We are committed to continuous learning and
            improvement, staying up-to-date with the latest trends and best
            practices in user experience design.
          </li>
        </ul>
      </section>

      <section className="section-approach">
        <h2>Our Approach</h2>
        <p>
          At UXilityPRO, we take a client-centric approach to every project. Our
          process is designed to ensure we understand our clients' needs and
          goals, and deliver innovative solutions that exceed their
          expectations. Our approach includes the following key stages:
        </p>
        <ol>
          <li>
            Discovery: We start by thoroughly understanding our clients'
            objectives, target audience, and project requirements through
            in-depth discussions and research.
          </li>
          <li>
            Design: Based on our findings, we develop creative and tailored
            solutions that prioritize user experience, visual appeal, and
            functionality, ensuring alignment with our clients' brand identity
            and goals.
          </li>
          <li>
            Development: Our experienced team of developers brings the designs
            to life, leveraging cutting-edge technologies and best practices to
            build robust and scalable solutions that meet our clients' needs.
          </li>
          <li>
            Delivery: We provide ongoing support and maintenance to ensure the
            long-term success of our projects, offering timely updates,
            troubleshooting, and enhancements as needed.
          </li>
        </ol>
      </section>

      <section className="section-testimonials">
        <h2>Client Testimonials</h2>
        <div className="testimonial">
          <p>"Testimonial from satisfied client 1."</p>
          <p>- Client Name, Company Name</p>
        </div>
        {/* Add more testimonials as needed */}
      </section>

      <section className="section-contact">
        <h2>Contact Us</h2>
        <p>Feel free to reach out to us for any inquiries or collaborations:</p>
        <div className="contact-info">
          <p>Email: info@uxilitypro.com</p>
          <p>Phone: +1234567890</p>
          <p>Address: 123 Main Street, City, Country</p>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
