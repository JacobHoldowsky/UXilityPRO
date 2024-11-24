import React from "react";
import { Link } from "react-router-dom";
import TestimonialSection from "./TestimonialSection";
import "./HomePage.css";
import {
  FaPaintBrush,
  FaChartLine,
  FaUserFriends,
  FaCogs,
  FaAward,
  FaHeadset,
} from "react-icons/fa";

const featuresData = [
  {
    title: "Beautiful Designs",
    icon: FaPaintBrush,
    description: "Custom-designed websites tailored to your brand.",
  },
  {
    title: "Results-Driven",
    icon: FaChartLine,
    description: "Drive success for your business with our effective websites.",
  },
  {
    title: "User-Friendly Experience",
    icon: FaUserFriends,
    description: "Intuitive navigation and seamless user experience.",
  },
];

const whyChooseUsData = [
  {
    title: "Tailored Solutions",
    icon: FaCogs,
    description:
      "We understand your business and provide customized solutions aligned with your goals.",
  },
  {
    title: "Expertise & Experience",
    icon: FaAward,
    description:
      "With years of experience, we bring deep technical expertise to every project.",
  },
  {
    title: "Exceptional Support",
    icon: FaHeadset,
    description:
      "We build relationships. Our team provides ongoing support to help you thrive.",
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

const HeroSection = () => (
  <section className="homepage-hero">
    <div className="homepage-hero-content">
      <h1 className="homepage-hero-title">Empowering Your Online Presence</h1>
      <p className="homepage-hero-subtitle">
        Crafting modern websites that elevate your business.
      </p>
      <Link
        to="/contact"
        className="homepage-btn-primary"
        aria-label="Get Started Today"
      >
        Get Started Today
      </Link>
    </div>
  </section>
);

const FeaturesSection = () => (
  <section className="homepage-features">
    <div className="homepage-container">
      <h2 className="homepage-section-title">Our Core Features</h2>
      <div className="homepage-features-grid">
        {featuresData.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </div>
      <div className="homepage-services-btn">
        <Link
          to="/services"
          className="homepage-btn-secondary"
          aria-label="Explore Our Services"
        >
          Explore Our Services
        </Link>
      </div>
    </div>
  </section>
);

const FeatureCard = ({ feature }) => {
  const IconComponent = feature.icon;
  return (
    <div className="homepage-feature-card">
      <div className="homepage-feature-icon">
        <IconComponent />
      </div>
      <h3 className="homepage-feature-title">{feature.title}</h3>
      <p className="homepage-feature-description">{feature.description}</p>
    </div>
  );
};

const WhyChooseUsSection = () => (
  <section className="homepage-why-choose-us">
    <div className="homepage-container">
      <h2 className="homepage-section-title">Why Choose Us?</h2>
      <div className="homepage-why-choose-us-grid">
        {whyChooseUsData.map((reason, index) => (
          <WhyChooseUsCard key={index} reason={reason} />
        ))}
      </div>
      <div className="homepage-services-btn">
        <Link
          to="/portfolio"
          className="homepage-btn-secondary"
          aria-label="Explore Our Portfolio"
        >
          Explore Our Portfolio
        </Link>
      </div>
    </div>
  </section>
);

const WhyChooseUsCard = ({ reason }) => {
  const IconComponent = reason.icon;
  return (
    <div className="why-choose-us-card">
      <div className="why-choose-us-icon">
        <IconComponent />
      </div>
      <h3 className="why-choose-us-title">{reason.title}</h3>
      <p className="why-choose-us-description">{reason.description}</p>
    </div>
  );
};

const TestimonialsSection = () => (
  <section className="homepage-testimonials">
    <div className="homepage-container">
      <h2 className="homepage-section-title">What Our Clients Say</h2>
      <TestimonialSection />
    </div>
  </section>
);

const CallToActionSection = () => (
  <section className="homepage-call-to-action">
    <div className="homepage-container">
      <h2 className="homepage-section-title call-to-action-section-title ">
        Ready to Transform Your Online Presence?
      </h2>
      <p className="call-to-action-description">
        Let’s take the next step together. Contact us today to start your
        journey toward a stronger, more effective online presence. We're here to
        help you grow and succeed!
      </p>
      <Link
        to="/contact"
        className="homepage-btn-primary"
        aria-label="Contact Us Now"
      >
        Contact Us Now
      </Link>
    </div>
  </section>
);

export default HomePage;
