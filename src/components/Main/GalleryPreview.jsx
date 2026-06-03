import React from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../../hooks/useAnimations";
import galleryImages from "../UI/GalleryImages";
import classes from "./GalleryPreview.module.css";

const GalleryPreview = () => {
  const sectionRef = useScrollReveal();
  
  // Show first 4 images for the preview
  const previewImages = galleryImages.slice(0, 4);

  return (
    <section className={`section ${classes.previewSection}`} id="gallery-preview" ref={sectionRef}>
      <div className="container">
        {/* ---- Section Header ---- */}
        <div className={`text-center ${classes.header}`}>
          <span className="section-label reveal">Portfolio Preview</span>
          <h2 className="section-title reveal stagger-1">Featured Project Showcase</h2>
          <p className="section-subtitle reveal stagger-2">
            A glance at our construction precision, innovative engineering designs, 
            and civil infrastructure accomplishments.
          </p>
        </div>

        {/* ---- Preview Grid ---- */}
        <div className={`${classes.grid} reveal stagger-3`}>
          {previewImages.map((image) => (
            <div key={image.id} className={classes.item}>
              <div className={classes.imageWrap}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className={classes.image}
                  loading="lazy"
                />
                <div className={classes.overlay}>
                  <div className={classes.overlayContent}>
                    <span className={classes.categoryBadge}>
                      {image.category}
                    </span>
                    <span className={classes.viewText}>View</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ---- CTA to Full Gallery ---- */}
        <div className={`text-center ${classes.ctaWrapper} reveal stagger-4`}>
          <Link to="/gallery" className={classes.ctaButton}>
            Browse Full Gallery
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={classes.ctaIcon}
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
