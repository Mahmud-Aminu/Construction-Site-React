import React from "react";
import { useScrollReveal } from "../../hooks/useAnimations";
import classes from "./Contact.module.css";
import ContactForm from "../UI/ContactForm";

const Contact = ({ cRef }) => {
  const sectionRef = useScrollReveal();

  return (
    <section className={`section ${classes.contactSection}`} id="contact" ref={cRef || sectionRef}>
      <div className="container">
        <div className={classes.wrapper}>
          {/* Left Column: Info */}
          <div className={`${classes.infoColumn} reveal`}>
            <span className="section-label">Contact Details</span>
            <h2 className="section-title">Let's Discuss Your Project</h2>
            <p className={classes.subtitle}>
              Whether you have a fully drafted design blueprint or just a high-level 
              concept, get in touch with our engineers today.
            </p>

            <ul className={classes.contactList}>
              <li className={classes.contactItem}>
                <div className={classes.iconBox}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <h4 className={classes.itemTitle}>Phone Numbers</h4>
                  <p className={classes.itemText}>+234 (0) 803 044 1981</p>
                  <p className={classes.itemText}>+234 (0) 807 464 2426</p>
                </div>
              </li>

              <li className={classes.contactItem}>
                <div className={classes.iconBox}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <h4 className={classes.itemTitle}>Email Address</h4>
                  <p className={classes.itemText}>mantsolhaassociatesconcept@gmail.com</p>
                </div>
              </li>

              <li className={classes.contactItem}>
                <div className={classes.iconBox}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <h4 className={classes.itemTitle}>Head Office</h4>
                  <p className={classes.itemText}>No A3 Mogadishu City Centre, Kaduna North, Kaduna State</p>
                </div>
              </li>

              <li className={classes.contactItem}>
                <div className={classes.iconBox}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <h4 className={classes.itemTitle}>Branch Office</h4>
                  <p className={classes.itemText}>Yahaya Madaki, Tudun Matawalle, Katsina, Katsina State</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Column: Contact Form */}
          <div className={`${classes.formColumn} reveal stagger-1`}>
            <div className={classes.formCard}>
              <h3 className={classes.formTitle}>Send a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
