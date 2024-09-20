import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import ContactPage from "./components/ContactPage";
import ServicesPage from "./components/ServicesPage";
import CustomWebDesignServiceDetails from "./components/CustomWebDesignServiceDetails";
import AboutPage from "./components/AboutPage";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; // Import ScrollToTop component
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Add ScrollToTop component */}
      <ToastContainer />
      <Analytics />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route
            path="/services/custom-website-design"
            element={<CustomWebDesignServiceDetails />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
