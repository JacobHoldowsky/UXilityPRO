import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ContactPage from "./components/ContactPage";
import ServicesPage from "./components/ServicesPage";
import ServiceDetails from "./components/CustomWebDesignServiceDetails";

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
                    <h1>Welcome to UXilityPRO</h1>
                    <p>
                      Your partner in creating stunning websites for small
                      businesses
                    </p>
                    <a href="/services" className="btn-primary">
                      Explore Services
                    </a>
                  </div>
                </section>

                {/* Features Section */}
                <section className="features">
                  <div className="feature">
                    <h2>Beautiful Designs</h2>
                    <p>Custom-designed websites tailored to your brand</p>
                  </div>
                  <div className="feature">
                    <h2>User-Friendly Experience</h2>
                    <p>Intuitive navigation and seamless user experience</p>
                  </div>
                  <div className="feature">
                    <h2>Results-Driven</h2>
                    <p>
                      Drive success for your business with our effective
                      websites
                    </p>
                  </div>
                </section>

                {/* Testimonials Section */}
                <section className="testimonials">
                  <h2>What Our Clients Say</h2>
                  {/* Include testimonials here */}
                </section>
              </React.Fragment>
            }
          />

          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/custom-website-design" element={<ServiceDetails />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/contact" element={<ContactPage />} />

        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
