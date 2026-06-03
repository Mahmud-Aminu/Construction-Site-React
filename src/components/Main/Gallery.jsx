import React, { useState, useCallback, useEffect } from "react";
import { useScrollReveal } from "../../hooks/useAnimations";
import galleryImages from "../UI/GalleryImages";
import classes from "./Gallery.module.css";

const categories = ["All", "Construction", "Infrastructure", "Engineering"];

const Gallery = () => {
  const sectionRef = useScrollReveal();
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });
  const [animating, setAnimating] = useState(false);

  const filteredImages =
    activeFilter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  const handleFilterChange = (category) => {
    if (category === activeFilter) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveFilter(category);
      setAnimating(false);
    }, 300);
  };

  const openLightbox = (index) => {
    setLightbox({ open: true, index });
  };

  const closeLightbox = useCallback(() => {
    setLightbox({ open: false, index: 0 });
  }, []);

  const navigateLightbox = useCallback(
    (direction) => {
      setLightbox((prev) => {
        const newIndex =
          (prev.index + direction + filteredImages.length) %
          filteredImages.length;
        return { ...prev, index: newIndex };
      });
    },
    [filteredImages.length]
  );

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightbox.open) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigateLightbox(-1);
      if (e.key === "ArrowRight") navigateLightbox(1);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightbox.open, closeLightbox, navigateLightbox]);

  return (
    <section
      className={`section ${classes.gallery}`}
      id="gallery"
      ref={sectionRef}
    >
      <div className="container">
        {/* ---- Category Filters ---- */}
        <div className={`${classes.filters} reveal stagger-3`}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${classes.filterBtn} ${activeFilter === cat ? classes.filterActive : ""
                }`}
              onClick={() => handleFilterChange(cat)}
            >
              {cat}
              {activeFilter === cat && (
                <span className={classes.filterIndicator} />
              )}
            </button>
          ))}
        </div>




        {/* ---- Gallery Grid ---- */}
        <div
          className={`${classes.grid} ${animating ? classes.gridAnimating : ""}`}
        >
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className={`${classes.item} reveal stagger-${(index % 6) + 1}`}
              onClick={() => openLightbox(index)}
            >
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
                    <div className={classes.expandIcon}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M15 3h6v6" />
                        <path d="M9 21H3v-6" />
                        <path d="M21 3l-7 7" />
                        <path d="M3 21l7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---- Lightbox Modal ---- */}
      {lightbox.open && (
        <div className={classes.lightbox} onClick={closeLightbox}>
          <div
            className={classes.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              className={classes.lightboxClose}
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Previous */}
            <button
              className={`${classes.lightboxNav} ${classes.lightboxPrev}`}
              onClick={() => navigateLightbox(-1)}
              aria-label="Previous image"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Image */}
            <div className={classes.lightboxImageWrap}>
              <img
                src={filteredImages[lightbox.index]?.src}
                alt={filteredImages[lightbox.index]?.alt}
                className={classes.lightboxImage}
              />
            </div>

            {/* Next */}
            <button
              className={`${classes.lightboxNav} ${classes.lightboxNext}`}
              onClick={() => navigateLightbox(1)}
              aria-label="Next image"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            {/* Footer info */}
            <div className={classes.lightboxFooter}>
              <span className={classes.lightboxCategory}>
                {filteredImages[lightbox.index]?.category}
              </span>
              <span className={classes.lightboxCount}>
                {lightbox.index + 1} / {filteredImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
