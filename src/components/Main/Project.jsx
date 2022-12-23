import React from "react";
import { ConstructionCarousel, DesignCarousel } from "../UI/Carousel";
import "./Project.css";

const Project = () => {
  return (
    <div className="project_container">
      <h4>Features Projects</h4>
      <p>
        No matter the task, we're dedicated to finding solution that works for
        everyone while attaining result,here are afew project that we've the
        privilege to work on
      </p>
      <div className="carousal_container">
        <DesignCarousel />
        <ConstructionCarousel />
      </div>
    </div>
  );
};

export default Project;
