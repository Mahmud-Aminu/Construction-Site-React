import { Link } from "react-router-dom";
import { ReadMoreRounded } from "@mui/icons-material";
import { Divider, Typography } from "@mui/material";
import Slide from "react-awesome-reveal";
import Button from "../UI/Button";
import React from "react";
import Card from "../UI/Card";
import classes from "./Ourservice.module.css";

const aboutIcons = [
  {
    icons: process.env.PUBLIC_URL + "./png/building.png",
    title: "Sustainable Design",
    id: "1",
  },
  {
    icons: process.env.PUBLIC_URL + "./png/architect.png",
    title: "Construction Management",
    id: "2",
  },
  {
    icons: process.env.PUBLIC_URL + "./png/support.png",
    title: "Resource Management",
    id: "3",
  },
];

export const Ourservice = (props) => {
  return (
    <div className={classes.aboutus__wrapper}>
      <div className={classes.about_us}>
        <Slide triggerOnce="true">
          <h1>About Us</h1>
        </Slide>
        <p>
          {" "}
          Mantsolha Associates Concept Ltd. is an indigenous Consultancy and
          Construction Firm managed by a group of qualified and experienced
          professionals. We recognizes the important needs of our Clients and is
          therefore set to provide them with its expertise in this regard.
          <Link to="/About">
            <Button>
              <Typography variant="string" fontSize="small">
                read more
                <ReadMoreRounded fontSize="big" />
              </Typography>
            </Button>
          </Link>
        </p>
      </div>
      <Divider />
      <div className={classes.our_service}>
        <Slide triggerOnce="true">
          <h4>Our Services</h4>
        </Slide>
        <p>
          Our services are delivered by a professional team with years of
          experience.{" "}
        </p>
        <h1>SOLID FOUNDATION FOR A BRIGHTER FUTURE</h1>
        <p>
          Our passion is helping clients find solutuons perfectly toilored to
          thier needs. From our battle-tested process to our reliable client
          care, we're here for you.
        </p>
      </div>
      <div className={classes.icons__wrapper}>
        {aboutIcons.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            image={item.icons}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      <div style={{ width: "70%", margin: "auto" }}>
        <p style={{ fontSize: "16px" }}>
          Start the discussion and get a sense if our core values align with
          your vision and needs.
        </p>
        <Button onClick={props.onScroll}>
          <Typography variant="string" fontSize="small">
            Contact Us
          </Typography>
        </Button>
      </div>
    </div>
  );
};
