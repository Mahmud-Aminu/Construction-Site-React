import React, { useState, useEffect } from "react";
import { useScrollReveal } from "../../hooks/useAnimations";
import classes from "./Testimonials.module.css";

const testimonials = [
  {
    quote: "Mantsolha Associates delivered our commercial complex ahead of schedule and with structural integrity that met all international specifications. Their engineering team is second to none.",
    name: "Architect Ibrahim Danlami",
    company: "Capital Properties Ltd",
    rating: 5
  },
  {
    quote: "Their road design and civil engineering consultancy was instrumental in getting state approval for our industrial park layout. Highly professional and cost-effective.",
    name: "Engr. Yusuf Abubakar",
    company: "Northern Logistics Hub",
    rating: 5
  },
  {
    quote: "The project management expertise shown during the dualization of our township project saved us millions in material costs through efficient resources allocation and supervision.",
    name: "Alhaji Musa Katsina",
    company: "Katsina Urban Development Board",
    rating: 5
  }
];

const Testimonials = () => {
  const sectionRef = useScrollReveal();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className={`section section--alt ${classes.testimonials}`} id="testimonials" ref={sectionRef}>
      <div className="container">
        <div className={`text-center ${classes.header}`}>
          <span className="section-label reveal">Testimonials</span>
          <h2 className="section-title reveal stagger-1">What Our Clients Say</h2>
          <p className="section-subtitle reveal stagger-2">
            Read stories of how we help our partners bring engineering visions 
            into reality with safety, budget compliance, and top quality.
          </p>
        </div>

        <div className={`${classes.carouselWrapper} reveal stagger-3`}>
          <div className={classes.carouselInner}>
            {testimonials.map((item, index) => (
              <div
                key={index}
                className={`${classes.slide} ${index === activeIndex ? classes.slideActive : ""}`}
                aria-hidden={index !== activeIndex}
              >
                <div className={classes.quoteIcon}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                <blockquote className={classes.quoteText}>
                  "{item.quote}"
                </blockquote>
                <div className={classes.stars}>
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 .587l3.668 7.431 8.2 1.191-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.209l8.2-1.191L12 .587z"/>
                    </svg>
                  ))}
                </div>
                <cite className={classes.author}>
                  <span className={classes.authorName}>{item.name}</span>
                  <span className={classes.authorCompany}>{item.company}</span>
                </cite>
              </div>
            ))}
          </div>

          {/* Navigation controls */}
          <div className={classes.controls}>
            <button
              onClick={handlePrev}
              className={classes.controlBtn}
              aria-label="Previous testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <div className={classes.dots}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`${classes.dot} ${index === activeIndex ? classes.dotActive : ""}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className={classes.controlBtn}
              aria-label="Next testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
