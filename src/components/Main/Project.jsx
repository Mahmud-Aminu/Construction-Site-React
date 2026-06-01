import React from "react";
import DesignCarousel from "../UI/Carousel";
import { useScrollReveal } from "../../hooks/useAnimations";
import "./Project.css";

const Project = () => {
  const sectionRef = useScrollReveal();

  return (
    <section className="section section--dark project-section" id="projects" ref={sectionRef}>
      <div className="container">
        <div className="text-center project-header">
          <span className="section-label reveal">Featured Projects</span>
          <h2 className="section-title reveal stagger-1">Engineering Landmarks</h2>
          <p className="section-subtitle reveal stagger-2">
            No matter the task, we are dedicated to finding solutions that work 
            while delivering outstanding results. Here are some of our works.
          </p>
        </div>

        <div className="carousel-wrapper reveal stagger-3">
          <DesignCarousel />
        </div>
      </div>
    </section>
  );
};

export default Project;
