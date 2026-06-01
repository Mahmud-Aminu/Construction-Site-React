import React from "react";
import { useScrollReveal } from "../../hooks/useAnimations";
import classes from "./Process.module.css";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "We discuss your project requirements, goals, budget constraints, and timeline expectations to understand your vision."
  },
  {
    number: "02",
    title: "Planning",
    description: "Feasibility studies, site assessments, and comprehensive project scheduling to lay a solid foundation for execution."
  },
  {
    number: "03",
    title: "Design",
    description: "Architectural modeling, structural analysis, and engineering drawings crafted to meet international design standards."
  },
  {
    number: "04",
    title: "Construction",
    description: "Mobilization, structural erection, civil works, and continuous supervision to bring our designs to reality safely and precisely."
  },
  {
    number: "05",
    title: "Delivery",
    description: "Thorough testing, inspections, facility handovers, and ongoing facility management/support post-completion."
  }
];

const Process = () => {
  const sectionRef = useScrollReveal();

  return (
    <section className={`section ${classes.process}`} id="process" ref={sectionRef}>
      <div className="container">
        <div className={`text-center ${classes.header}`}>
          <span className="section-label reveal">Our Process</span>
          <h2 className="section-title reveal stagger-1">How We Deliver Excellence</h2>
          <p className="section-subtitle reveal stagger-2">
            A battle-tested workflow developed over years of managing engineering 
            and construction projects from inception to completion.
          </p>
        </div>

        <div className={classes.timeline}>
          <div className={classes.timelineLine} />
          {steps.map((step, index) => (
            <div
              key={index}
              className={`${classes.timelineItem} reveal ${index % 2 === 0 ? classes.timelineItemLeft : classes.timelineItemRight}`}
            >
              <div className={classes.timelineMarker}>
                <span className={classes.timelineNumber}>{step.number}</span>
              </div>
              <div className={classes.timelineContent}>
                <h3 className={classes.stepTitle}>{step.title}</h3>
                <p className={classes.stepDescription}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
