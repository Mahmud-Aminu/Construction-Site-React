import React from "react";
import { Carousel } from "react-responsive-carousel";
import Images from "./Images";
import "./Carousel.css";

const DesignCarousel = () => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      infiniteLoop={true}
      interval={5000}
      transitionTime={600}
      emulateTouch={true}
      useKeyboardArrows={true}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className="carousel-arrow carousel-arrow-prev"
            aria-label="Previous project"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className="carousel-arrow carousel-arrow-next"
            aria-label="Next project"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        )
      }
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        return (
          <button
            type="button"
            onClick={onClickHandler}
            aria-label={`${label} ${index + 1}`}
            className={`carousel-dot ${isSelected ? "carousel-dot--active" : ""}`}
          />
        );
      }}
    >
      {Images.map((project) => (
        <div key={project.id} className="carousel-slide-container">
          <div className="carousel-image-wrapper">
            <img src={project.img} alt={project.name} className="carousel-project-img" />
            <div className="carousel-overlay" />
          </div>
          <div className="carousel-project-info">
            <div className="carousel-project-tag">{project.category}</div>
            <h3 className="carousel-project-title">{project.name}</h3>
            <div className="carousel-project-meta">
              <div className="carousel-meta-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>{project.location}</span>
              </div>
              <div className="carousel-meta-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span>Completed: {project.year}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default DesignCarousel;
