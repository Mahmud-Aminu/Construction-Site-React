import React from "react";
import { useScrollReveal } from "../../hooks/useAnimations";
import classes from "./MapSection.module.css";

const MapSection = () => {
  const sectionRef = useScrollReveal();

  // URL-encoded search terms for Kaduna and Katsina office locations
  const kadunaMapUrl = "https://maps.google.com/maps?q=Mogadishu%20City%20Centre,%20Kaduna%20North,%20Kaduna%20State&t=&z=14&ie=UTF8&iwloc=&output=embed";
  const katsinaMapUrl = "https://maps.google.com/maps?q=Yahaya%20Madaki,%20Tudun%20Matawalle,%20Katsina&t=&z=14&ie=UTF8&iwloc=&output=embed";

  return (
    <section className={`section ${classes.mapSection}`} ref={sectionRef}>
      <div className="container">
        <div className={`text-center ${classes.header}`}>
          <span className="section-label reveal">Our Offices</span>
          <h2 className="section-title reveal stagger-1 font-heading">Find Us Near You</h2>
          <p className="section-subtitle reveal stagger-2">
            Visit either our Head Office in Kaduna or our Katsina Branch to speak 
            with one of our professional structural advisors directly.
          </p>
        </div>

        <div className={classes.grid}>
          {/* Head Office Kaduna */}
          <div className={`${classes.card} reveal stagger-2`}>
            <div className={classes.mapContainer}>
              <iframe
                title="Kaduna Head Office Location Map"
                src={kadunaMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
            <div className={classes.details}>
              <h3 className={classes.officeTitle}>Kaduna Head Office</h3>
              <p className={classes.address}>
                No A3 Mogadishu City Centre, Kaduna North, Kaduna State, Nigeria.
              </p>
            </div>
          </div>

          {/* Branch Office Katsina */}
          <div className={`${classes.card} reveal stagger-3`}>
            <div className={classes.mapContainer}>
              <iframe
                title="Katsina Branch Office Location Map"
                src={katsinaMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
            <div className={classes.details}>
              <h3 className={classes.officeTitle}>Katsina Branch Office</h3>
              <p className={classes.address}>
                Yahaya Madaki, Tudun Matawalle, Katsina, Katsina State, Nigeria.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
