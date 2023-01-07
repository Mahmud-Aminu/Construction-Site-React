import { Slide } from "react-awesome-reveal";
import classes from "./Card.module.css";
const Card = (props) => {
  return (
    <Slide triggerOnce="true">
      <div className={classes.card}>
        <div className={classes.image}>
          <img src={props.image} alt={props.alt} />
        </div>
        <div className={classes.content}>
          <p>{props.title}</p>
        </div>
      </div>
    </Slide>
  );
};

export default Card;
