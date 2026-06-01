import React from "react";
import { useScrollReveal, useCountUp } from "../../hooks/useAnimations";
import classes from "./Statistics.module.css";

const StatItem = ({ target, suffix, label }) => {
  const countRef = useCountUp(target);

  return (
    <div className={classes.statItem}>
      <div className={classes.numberWrapper}>
        <span ref={countRef} className={classes.number}>0</span>
        <span className={classes.suffix}>{suffix}</span>
      </div>
      <p className={classes.label}>{label}</p>
    </div>
  );
};

const Statistics = () => {
  const sectionRef = useScrollReveal();

  const stats = [
    { target: 150, suffix: "+", label: "Projects Completed" },
    { target: 10, suffix: "+", label: "Years Experience" },
    { target: 20, suffix: "+", label: "Industry Experts" },
    { target: 5, suffix: "+", label: "States Covered" },
  ];

  return (
    <section className={`section section--primary ${classes.statistics}`} ref={sectionRef}>
      <div className="container">
        <div className={classes.grid}>
          {stats.map((stat, index) => (
            <div key={index} className="reveal stagger-1">
              <StatItem
                target={stat.target}
                suffix={stat.suffix}
                label={stat.label}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
