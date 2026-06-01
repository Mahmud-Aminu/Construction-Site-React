import React from "react";
import { useScrollReveal } from "../../hooks/useAnimations";
import classes from "./Ourservice.module.css";

const services = [
  {
    id: 1,
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18"/>
        <path d="M5 21V7l8-4v18"/>
        <path d="M19 21V11l-6-4"/>
        <path d="M9 9h.01"/><path d="M9 12h.01"/><path d="M9 15h.01"/>
        <path d="M9 18h.01"/>
      </svg>
    ),
    title: "Civil Engineering",
    description:
      "Comprehensive civil engineering services including road construction, drainage systems, and site development works.",
    cta: "Learn more",
  },
  {
    id: 2,
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="2"/>
        <path d="M12 6V2"/><path d="M6 6V4"/><path d="M18 6V4"/>
        <path d="M2 10h20"/>
        <path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/>
      </svg>
    ),
    title: "Structural Design",
    description:
      "Expert structural analysis and design for buildings, bridges, and industrial facilities using modern engineering standards.",
    cta: "Learn more",
  },
  {
    id: 3,
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20"/>
        <path d="M5 20V8.5a1 1 0 0 1 .4-.8l6-4.5a1 1 0 0 1 1.2 0l6 4.5a1 1 0 0 1 .4.8V20"/>
        <path d="M9 20v-6h6v6"/>
        <path d="M10 10h4"/>
      </svg>
    ),
    title: "Construction Management",
    description:
      "End-to-end construction management ensuring projects are delivered on time, within budget, and to the highest quality standards.",
    cta: "Learn more",
  },
  {
    id: 4,
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <path d="M9 15l2 2 4-4"/>
      </svg>
    ),
    title: "Project Consultancy",
    description:
      "Professional advisory services to guide clients through complex engineering decisions with data-driven insights.",
    cta: "Learn more",
  },
  {
    id: 5,
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
        <path d="M6 8h.01"/><path d="M10 8h8"/>
        <path d="M6 12h.01"/><path d="M10 12h8"/>
      </svg>
    ),
    title: "Quantity Surveying",
    description:
      "Accurate cost estimation, bill of quantities preparation, and financial management throughout the project lifecycle.",
    cta: "Learn more",
  },
  {
    id: 6,
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    title: "Project Supervision",
    description:
      "On-site supervision and quality control to ensure construction meets design specifications and industry standards.",
    cta: "Learn more",
  },
];

export const Ourservice = () => {
  const sectionRef = useScrollReveal();

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={`section section--alt ${classes.services}`} id="services" ref={sectionRef}>
      <div className="container">
        <div className={`text-center ${classes.header}`}>
          <span className="section-label reveal">Our Services</span>
          <h2 className="section-title reveal stagger-1">
            Comprehensive Engineering Solutions
          </h2>
          <p className="section-subtitle reveal stagger-2">
            From concept to completion, we deliver a full spectrum of engineering 
            and construction services tailored to your project needs.
          </p>
        </div>

        <div className={classes.grid}>
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`${classes.card} reveal stagger-${Math.min(index + 1, 6)}`}
            >
              <div className={classes.cardIcon}>{service.icon}</div>
              <h3 className={classes.cardTitle}>{service.title}</h3>
              <p className={classes.cardDescription}>{service.description}</p>
              <button
                className={classes.cardCta}
                onClick={scrollToContact}
              >
                {service.cta}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
