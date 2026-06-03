import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Layouts/Navigation";
import Main from "./components/Main/Main";
import GalleryPage from "./components/Main/GalleryPage";
import Footer from "./components/Layouts/Footer";
import ScrollToAnchor from "./components/UI/ScrollToAnchor";
import "./App.css";

function App() {
  const contactRef = useRef(null);

  return (
    <div className="App">
      <ScrollToAnchor />
      {/* Skip to main content for accessibility */}
      <a href="#hero" className="skip-to-content">
        Skip to main content
      </a>
      <Navigation />
      <Routes>
        <Route path="/" element={<Main cRef={contactRef} />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
