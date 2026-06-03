import React from "react";
import Gallery from "./Gallery";
import classes from "./GalleryPage.module.css";

const GalleryPage = () => {
  return (
    <div className={classes.galleryPage}>
      {/* ---- Gallery Page Hero ---- */}
      <section className={classes.pageHero}>
        <div className={classes.heroBg}>
          <img
            src="/backgroung.jpg"
            alt="Engineering construction site"
            className={classes.heroBgImage}
          />
          <div className={classes.overlay} />
        </div>

        <div className={`container ${classes.heroContent}`}>
          <span className={classes.heroBadge}>
            <span className={classes.heroBadgeDot} />
            Mantsolha Associates Portfolio
          </span>
          <h1 className={classes.title}>
            Our Project <span className={classes.heroHighlight}>Gallery</span>
          </h1>
          <p className={classes.subtitle}>
            A visual showcase of our construction excellence, engineering
            precision, and infrastructure milestones across Nigeria.
          </p>
        </div>
      </section>

      {/* ---- Full Gallery Component ---- */}
      <Gallery />
    </div>
  );
};

export default GalleryPage;
