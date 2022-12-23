import { Divider } from "@mui/material";
import React from "react";
import classes from "./Aboutus.module.css";

const aboutIcons = [
  {
    icons: process.env.PUBLIC_URL + "./png/building.png",
    title: "Sustainable Design",
    description: "",
  },
  {
    icons: process.env.PUBLIC_URL + "./png/architect.png",
    title: "Construction Management",
    description: "",
  },
  {
    icons: process.env.PUBLIC_URL + "./png/support.png",
    title: "Resource Management",
    description: "",
  },
];

const AboutItems = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.img__container}>
        <img src={props.icon} alt="icons" />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <Divider />
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export const AboutUs = (props) => {
  return (
    <div className={classes.aboutus__wrapper}>
      <div className={classes.about_us}>
        <h1>About Us</h1>
        <p>
          {" "}
          Mantsolhat Associates Concept is a multi-disciplinary Engineering firm
          with vast experience in the consultancy industry and specialized in
          residential, commercial and industrial projects and completed projects
          in the field of architectural, structural design, electrical,
          mechanical and Geotechnical Services. Our client includes
          Government/Semi Government departments and public sector.
        </p>
      </div>
      <Divider />
      <div className={classes.our_service}>
        <h4>Our Services</h4>
        <h1>SOLID FOUNDATION FOR A BRIGHTER FUTURE</h1>
        <p>
          Our passiion is helping clients find solutuons perfectly toilored to
          thier needs. From our battle-tested process to our reliable client
          care, we're here for you
        </p>
      </div>
      <div className={classes.icons__wrapper}>
        {aboutIcons.map((item) => (
          <AboutItems
            icon={item.icons}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};
