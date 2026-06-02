import React, { useRef } from "react";
import Navigation from "./components/Layouts/Navigation";
import Main from "./components/Main/Main";
import Footer from "./components/Layouts/Footer";
import "./App.css";

function App() {
  const contactRef = useRef(null);

  return (
    <div className="App">
      {/* Skip to main content for accessibility */}
      <a href="#hero" className="skip-to-content">
        Skip to main content
      </a>
      <Navigation />
      <Main cRef={contactRef} />
      <Footer />

    </div>
  );
}

export default App;
