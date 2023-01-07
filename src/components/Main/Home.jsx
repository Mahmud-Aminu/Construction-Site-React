import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import Button from "../UI/Button";
import React from "react";
import { Background } from "../UI/Background";
import classes from "./Home.module.css";
import { Bounce } from "react-awesome-reveal";

const logo = process.env.PUBLIC_URL + "/micon.png";
const Home = (props) => {
  return (
    <Background>
      <div className={classes.intro}>
        <div className={classes.iconContainer}>
          <img src={logo} alt="logo" />
        </div>
        <p>
          A multi-disciplinary Engineering firm with vast experience in the
          construction and consultancy industry and specialized in residential,
          commercial and industrial projects.
        </p>
        <div style={{ displa: "flex", flexDirection: "row", margin: "10px" }}>
          <Link to="/About">
            <Button className={classes.btn}>
              {" "}
              <Typography variant="string" fontSize="small">
                ABOUT US
              </Typography>
            </Button>
          </Link>

          <Button className={classes.action} onClick={props.onScroll}>
            {" "}
            <Bounce>
              <Typography variant="string" fontSize="s">
                CONTACT US
              </Typography>
            </Bounce>
          </Button>
        </div>
      </div>
    </Background>
  );
};

export default Home;
