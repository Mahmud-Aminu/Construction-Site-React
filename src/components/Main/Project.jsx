import React from "react";
import DesignCarousel from "../UI/Carousel";

import "./Project.css";

const Project = (props) => {
  return (
    <div className="project_container">
      <h1>Features Projects</h1>
      <p>
        No matter the task, we're dedicated to finding solution that works for
        everyone while attaining result, here are a few project that we've the
        privilege to work on.
      </p>
      <div className="carousal_container">
        <DesignCarousel />
      </div>
    </div>
  );
};

export default Project;
