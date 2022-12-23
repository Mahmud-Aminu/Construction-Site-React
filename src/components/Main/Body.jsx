import { Button } from "@mui/material";
import React from "react";
import "./Body.css";
import { AboutUs } from "./AboutUs";
import Project from "./Project";

const Body = () => {
  const style = {
    backgroundImage: `url(${process.env.PUBLIC_URL + "/backgroung.jpg"})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "700px",
  };

  return (
    <div className="top">
      <div style={style}>
        <div className="intro">
          <div className="header__wrapper">
            <h1>Mantsolha Association Concept</h1>
          </div>

          <p>
            Mantsolhat Associates Concept is a multi-disciplinary Engineering
            firm with vast experience in the consultancy industry and
            specialized in residential, commercial and industrial projects and
            completed projects in the field of architectural, structural design,
            electrical, mechanical and Geotechnical Services. Our client
            includes Government/Semi Government departments and public sector.{" "}
          </p>
          <Button variant="outline">Read More</Button>
        </div>
      </div>
      <section id="/AbouUs">
        <AboutUs />
      </section>
      <section id="/Project">
        <Project />
      </section>
    </div>
  );
};

export default Body;
