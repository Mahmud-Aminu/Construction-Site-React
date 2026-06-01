import React from "react";
import { useScrollReveal } from "../../hooks/useAnimations";
import profileData from "../UI/ProfilePics";
import classes from "./Team.module.css";

const TeamCard = ({ image, name, title, bio, socials }) => {
  return (
    <div className={`${classes.card} reveal stagger-2`}>
      <div className={classes.imageWrapper}>
        <img src={image} alt={name} className={classes.photo} />
        <div className={classes.overlay}>
          <div className={classes.socials}>
            {socials.linkedin && (
              <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label={`${name}'s LinkedIn`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            )}
            {socials.twitter && (
              <a href={socials.twitter} target="_blank" rel="noreferrer" aria-label={`${name}'s Twitter`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>
            )}
            {socials.email && (
              <a href={socials.email} aria-label={`Email ${name}`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
      <div className={classes.content}>
        <h3 className={classes.name}>{name}</h3>
        <p className={classes.role}>{title}</p>
        <p className={classes.bio}>{bio}</p>
      </div>
    </div>
  );
};

const Teams = () => {
  const sectionRef = useScrollReveal();

  return (
    <section className={`section ${classes.team}`} id="team" ref={sectionRef}>
      <div className="container">
        <div className={`text-center ${classes.header}`}>
          <span className="section-label reveal">Leadership Team</span>
          <h2 className="section-title reveal stagger-1">Meet Our Experts</h2>
          <p className="section-subtitle reveal stagger-2">
            A dedicated team of licensed engineering consultants, construction supervisors, 
            and project delivery experts.
          </p>
        </div>

        <div className={classes.grid}>
          {profileData.map((member) => (
            <TeamCard
              key={member.id}
              image={member.image}
              name={member.name}
              title={member.title}
              bio={member.bio}
              socials={member.socials}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
