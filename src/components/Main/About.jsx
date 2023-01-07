import { useEffect } from "react";
import { Divider } from "@mui/material";
import { Slide } from "react-awesome-reveal";
import { AboutBg } from "../UI/Background";
import Contact from "./Contact";
import classes from "./About.module.css";
const logo = process.env.PUBLIC_URL + "/micon.png";

const service = [
  {
    id: "1",
    img: process.env.PUBLIC_URL + "/png/house-design.png",
    title: "Architecture, Building Design & Construction",
  },
  {
    id: "2",
    img: process.env.PUBLIC_URL + "/png/design.png",
    title: "Civil/Structural Engineering Consultancy and Construction",
  },
  {
    id: "3",
    img: process.env.PUBLIC_URL + "/png/sustainable.png",
    title: "Electrical Design & Electronic Installations",
  },
  {
    id: "4",
    img: process.env.PUBLIC_URL + "/png/gear.png",
    title: "Mechanical Engineering Design and Services Installations",
  },
  {
    id: "5",
    img: process.env.PUBLIC_URL + "/png/water.png",
    title: "Water & Environmental Engineering Design",
  },
  {
    id: "6",
    img: process.env.PUBLIC_URL + "/png/clipboard.png",
    title: "Project Management",
  },
  {
    id: "7",
    img: process.env.PUBLIC_URL + "/png/agent.png",
    title: "Estate & Facility Management",
  },
];
const ServiceCard = (props) => {
  return (
    <Slide triggerOnce="true">
      <div className={classes.service_card}>
        <img src={props.image} alt="icons" width="50px" height="50px" />
        <Divider />
        <p>{props.title}</p>
      </div>
    </Slide>
  );
};
const About = (props) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className={classes.parent}>
      <div className={classes.header}>
        <AboutBg>
          <div className={classes.wrapper}>
            <img src={logo} alt="logo" />
          </div>
        </AboutBg>
      </div>
      <div className={classes.contain}>
        <section className={classes.section_one}>
          <Slide triggerOnce="true">
            <h1> Who we are</h1>
          </Slide>

          <p>
            We are a group of qualified and experienced professionals. At
            Mantsola Associates Concept Ltd we recognizes the important needs of
            our Clients by knowing our Clients’ needs, by keeping them foremost
            in our minds and deeds, by observing the legal and government policy
            directives and by thoroughly understanding the working of both local
            and global economy.
          </p>
        </section>
        <section className={classes.span}>
          <div className={classes.div}>
            <img src={process.env.PUBLIC_URL + "/section.jpg"} alt="" />
            <p>Building Design and Construction.</p>
          </div>
          <hr />
          <div className={classes.div}>
            <p>Bridge Design and Construction.</p>
            <img src={process.env.PUBLIC_URL + "/bridge.jpg"} alt="" />
          </div>
        </section>

        <section className={classes.section_two}>
          <p>
            <span>
              We highlighted all problems associated with the project along with
              suggested solutions to our client.
            </span>
          </p>
          <Slide triggerOnce="true">
            <h1 className={classes.what}>What we bring </h1>
          </Slide>
          <ul>
            <li>Technical Conference</li>
            <li>Highly Trained Professional Personnel</li>
            <li>Effective Quality Control</li>
          </ul>
          <p>
            <span>
              We are fully computerized and adequately staffed to meet up the
              expectations of most challenges projects.{" "}
            </span>
          </p>
        </section>

        <section>
          <div className={classes.service}>
            <h1>Our services </h1>
            <div className={classes.service_wrapper}>
              {service.map((item) => (
                <ServiceCard
                  key={item.id}
                  id={item.id}
                  image={item.img}
                  title={item.title}
                />
              ))}
            </div>
          </div>
        </section>
        <section style={{ textAlign: "center" }} ref={props.cRef}>
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default About;
