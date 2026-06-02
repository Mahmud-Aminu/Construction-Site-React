import React from "react";
import { useScrollReveal } from "../../hooks/useAnimations";
import classes from "./WhyChooseUs.module.css";

const features = [
  {
    id: 1,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Proven Track Record",
    description:
      "Over a decade of delivering successful projects across Nigeria, from residential buildings to major infrastructure developments.",
  },
  {
    id: 2,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Builders Team",
    description:
      "Our team of qualified engineers, architects, and project managers bring decades of combined industry experience.",
  },
  {
    id: 3,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "On-Time Delivery",
    description:
      "We pride ourselves on meeting deadlines without compromising quality, ensuring your project stays on track.",
  },
  {
    id: 4,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
        <polyline points="7.5 19.79 7.5 14.6 3 12" />
        <polyline points="21 12 16.5 14.6 16.5 19.79" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: "Comprehensive Solutions",
    description:
      "From initial consultancy to final delivery, we provide end-to-end engineering solutions tailored to your needs.",
  },
];

const WhyChooseUs = () => {
  const sectionRef = useScrollReveal();

  return (
    <section className={`section ${classes.whyUs}`} id="about" ref={sectionRef}>
      <div className="container">
        <div className={`text-center ${classes.header}`}>
          <span className={`section-label reveal`}>Why Choose Us</span>
          <h2 className={`section-title reveal stagger-1`}>
            Building Trust Through Engineering Excellence
          </h2>
          <p className={`section-subtitle reveal stagger-2`}>
            Mantsolha Associates Concept Ltd is an indigenous consultancy and
            construction firm managed by a group of qualified and experienced
            professionals.
          </p>
        </div>

        <div className={classes.grid}>
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`${classes.card} reveal stagger-${index + 1}`}
            >
              <div className={classes.cardIcon}>{feature.icon}</div>
              <h3 className={classes.cardTitle}>{feature.title}</h3>
              <p className={classes.cardDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
