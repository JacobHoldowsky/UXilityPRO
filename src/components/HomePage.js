import React from "react";
import { Link } from "react-router-dom";
import TestimonialSection from "./TestimonialSection";
import "./HomePage.css";

const featuresData = [
  {
    title: "Beautiful Designs",
    icon: "fas fa-paint-brush",
    description: "Custom-designed websites tailored to your brand.",
  },
  {
    title: "Results-Driven",
    icon: "fas fa-chart-line",
    description: "Drive success for your business with our effective websites.",
  },
  {
    title: "User-Friendly Experience",
    icon: "fas fa-user-friends",
    description: "Intuitive navigation and seamless user experience.",
  },
];

const whyChooseUsData = [
  {
    title: "Tailored Solutions",
    description:
      "We take the time to understand your business and provide customized solutions that align perfectly with your goals.",
    icon: "fas fa-cogs",
  },
  {
    title: "Expertise & Experience",
    description:
      "With years of experience in web design and development, we bring deep technical expertise to every project.",
    icon: "fas fa-award",
  },
  {
    title: "Exceptional Support",
    description:
      "We don’t just build websites; we build relationships. Our team provides ongoing support to help your business thrive.",
    icon: "fas fa-headset",
  },
];

const HomePage = () => (
  <>
    <HeroSection />
    <FeaturesSection />
    <WhyChooseUsSection />
    <TestimonialsSection />
    <CallToActionSection />
  </>
);

const HeroSection = React.memo(() => (
  <section className="homepage-hero">
    <div className="homepage-hero-content">
      <h1 className="homepage-hero-title">Empowering Your Online Presence</h1>
      <Link to="/contact" className="homepage-btn-primary">
        Get Started Today
      </Link>
    </div>
  </section>
));

const FeaturesSection = React.memo(() => (
  <section className="homepage-features">
    <div className="homepage-container">
      <h2 className="homepage-section-title">Our Core Features</h2>
      <div className="homepage-features-grid">
        {featuresData.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </div>
      <div className="homepage-services-btn">
        <Link to="/services" className="homepage-btn-secondary">
          Explore Our Services
        </Link>
      </div>
    </div>
  </section>
));

const WhyChooseUsSection = React.memo(() => (
  <section className="homepage-why-choose-us">
    <div className="homepage-container">
      <h2 className="homepage-section-title">Why Choose Us?</h2>
      <div className="homepage-why-choose-us-grid">
        {whyChooseUsData.map((reason, index) => (
          <div key={index} className="why-choose-us-card">
            <i className={`why-choose-us-icon ${reason.icon}`}></i>
            <h3 className="why-choose-us-title">{reason.title}</h3>
            <p className="why-choose-us-description">{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
));

const FeatureCard = React.memo(({ feature }) => (
  <div className="homepage-feature-card">
    <div className="homepage-feature-icon">
      <i className={feature.icon}></i>
    </div>
    <h3 className="homepage-feature-title">{feature.title}</h3>
    <p className="homepage-feature-description">{feature.description}</p>
  </div>
));

const TestimonialsSection = React.memo(() => (
  <section className="homepage-testimonials">
    <div className="homepage-container">
      <h2 className="homepage-section-title">What Our Clients Say</h2>
      <TestimonialSection />
    </div>
  </section>
));

const CallToActionSection = React.memo(() => (
  <section className="homepage-call-to-action">
    <div className="homepage-container">
      <h2 className="homepage-section-title">Ready to Transform Your Online Presence?</h2>
      <p className="call-to-action-description">
        Let’s take the next step together. Contact us today to start your journey towards a stronger, more effective online presence. We're here to help you grow and succeed!
      </p>
      <Link to="/contact" className="homepage-btn-primary">
        Contact Us Now
      </Link>
    </div>
  </section>
));

export default HomePage;
