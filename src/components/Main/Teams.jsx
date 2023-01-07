import React from "react";
import Fade from "react-awesome-reveal";
import classes from "./Team.module.css";

import { Divider } from "@mui/material";
import profile from "../UI/ProfilePics";

const TeamCard = (props) => {
  return (
    <Fade cascade triggerOnce="true">
      <div className={classes.card}>
        <img src={props.image} alt={props.alt} />
        <div className={classes.content}>
          <h4>{props.name}</h4>
          <Divider />
          <p>{props.title}</p>
        </div>
      </div>
    </Fade>
  );
};

const Teams = () => {
  const director = profile.filter((team) => team.id === "2");
  const staff = profile.filter((staff) => staff.id !== "2");

  return (
    <div className={classes.team}>
      <div className={classes.team_parent_wrapper}>
        <h4>Our Teams</h4>
        <div className={classes.team__wrapper}>
          {director.map((ceo) => (
            <TeamCard
              key={ceo.id}
              id={ceo.id}
              image={ceo.image}
              name={ceo.name}
              title={ceo.title}
              alt={ceo.title}
            />
          ))}
        </div>
        <div className={classes.team__wrapper}>
          {staff.map((team) => (
            <TeamCard
              key={team.id}
              id={team.id}
              image={team.image}
              name={team.name}
              title={team.title}
              alt={team.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
