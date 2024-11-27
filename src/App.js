import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";
import '@fortawesome/fontawesome-free/css/all.min.css';



// Lazy loading components
const HomePage = lazy(() => import("./components/HomePage"));
const ContactPage = lazy(() => import("./components/ContactPage"));
const ServicesPage = lazy(() => import("./components/ServicesPage"));
const CustomWebDesignServiceDetails = lazy(() =>
  import("./components/CustomWebDesignServiceDetails")
);
const AboutPage = lazy(() => import("./components/AboutPage"));
const Portfolio = lazy(() => import("./components/Portfolio"));

function App() {
  return (
    <>
        <title>My App - Web Development and Design</title>
        <meta
          name="description"
          content="Web development and design services."
        />
      <ToastContainer /> {/* Moved outside Router */}
      <Analytics />
      <Router>
        <ScrollToTop />
        <div className="App">
          <Header />
          <Suspense fallback={<div>Loading...</div>}>
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
              <Route path="*" element={<div>Page Not Found</div>} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
