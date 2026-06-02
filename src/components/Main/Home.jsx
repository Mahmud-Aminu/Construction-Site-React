import React from "react";
import { useScrollReveal } from "../../hooks/useAnimations";
import classes from "./Home.module.css";

const heroBg = "/backgroung.jpg";

const Home = () => {
  const sectionRef = useScrollReveal();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={classes.hero} id="hero" ref={sectionRef}>
      <div className={classes.heroBg}>
        <img
          src={heroBg}
          alt="Engineering construction site"
          className={classes.heroBgImage}
        />
        <div className={classes.heroOverlay} />
      </div>

      <div className={classes.heroContent}>
        <div className={`${classes.heroText} reveal`}>
          <span className={classes.heroBadge}>
            <span className={classes.heroBadgeDot} />
            Engineering Consultancy & Construction
          </span>
          <h1 className={classes.heroTitle}>
            Building the Future Through{" "}
            <span className={classes.heroHighlight}>Engineering Excellence</span>
          </h1>
          <p className={classes.heroSubtitle}>
            We deliver innovative engineering, construction, and consultancy
            solutions for residential, commercial, and industrial developments.
          </p>
          <div className={classes.heroCtas}>
            <button
              className={classes.ctaPrimary}
              onClick={() => scrollToSection("contact")}
            >
              Request Consultation
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
            <button
              className={classes.ctaSecondary}
              onClick={() => scrollToSection("projects")}
            >
              View Projects
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={classes.scrollIndicator}>
        <span className={classes.scrollText}>Scroll to explore</span>
        <div className={classes.scrollLine}>
          <div className={classes.scrollDot} />
        </div>
      </div>
    </section>
  );
};

export default Home;
