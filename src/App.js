import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ContactPage from "./components/ContactPage";
import ServicesPage from "./components/ServicesPage";
import CustomWebDesignServiceDetails from "./components/CustomWebDesignServiceDetails";
import AboutPage from "./components/AboutPage";
import PortfolioPage from "./components/Portfolio";
import TestimonialSection from "./components/TestimonialSection";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                {/* Hero Section */}
                <section className="hero">
                  <div className="hero-content">
                    <p>Empowering Your Online Presence</p>
                    <Link to="/contact" className="btn-primary">
                      Get Started Today
                    </Link>
                  </div>
                </section>

                {/* Features Section */}
                <section className="features">
                  <div className="feature">
                    <h2>User-Friendly Experience</h2>
                    <div className="design-image">
                      <img src="yo.jpg" alt="Hero" />
                    </div>
                    <p>Intuitive navigation and seamless user experience</p>
                  </div>
                  <div className="feature">
                    <h2>Beautiful Designs</h2>
                    <div className="design-image">
                      <img src="yo3.jpg" alt="Hero" />
                    </div>
                    <p>Custom-designed websites tailored to your brand</p>
                  </div>
                  <div className="feature">
                    <h2>Results-Driven</h2>
                    <div className="design-image">
                      <img src="yo4.jpg" alt="Hero" />
                    </div>
                    <p>
                      Drive success for your business with our effective
                      websites
                    </p>
                  </div>
                </section>

                {/* Testimonials Section */}
                <section className="testimonials">
                  <h2>What Our Clients Say</h2>
                  <TestimonialSection />
                </section>
              </React.Fragment>
            }
          />

          <Route path="/services" element={<ServicesPage />} />
          <Route
            path="/services/custom-website-design"
            element={<CustomWebDesignServiceDetails />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
