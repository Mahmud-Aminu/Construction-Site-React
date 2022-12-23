import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";

const DesignCarousel = () => {
  return (
    <Carousel showThumbs={"false"} width={"50%"} autoPlay={"true"}>
      <div className="carousel">
        <img
          src={process.env.PUBLIC_URL + "./images/design/design1.jpg"}
          alt="design_Image"
        />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.!</p>
      </div>
      <div className="carousel">
        <img
          src={process.env.PUBLIC_URL + "./images/design/design2.jpg"}
          alt="design_Image"
        />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.!</p>
      </div>
      <div className="carousel">
        <img
          src={process.env.PUBLIC_URL + "./images/design/design3.jpg"}
          alt="design_Image"
        />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.!</p>
      </div>
      <div className="carousel">
        <img
          src={process.env.PUBLIC_URL + "./images/design/design4.jpg"}
          alt="design_Image"
        />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.!</p>
      </div>
      <div className="carousel">
        <img
          src={process.env.PUBLIC_URL + "./images/design/design5.jpg"}
          alt="design_Image"
        />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.!</p>
      </div>
    </Carousel>
  );
};

const ConstructionCarousel = () => {
  return (
    <Carousel
      showThumbs={"false"}
      width={"40%"}
      autoPlay={"true"}
      dynamicHeight={"false"}
    >
      <div className="carousel">
        <img
          src={process.env.PUBLIC_URL + "./images/construction/const_img1.jpg"}
          alt="construction_Image"
        />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.!</p>
      </div>
      <div className="carousel">
        <img
          src={process.env.PUBLIC_URL + "./images/construction/const_img2.jpg"}
          alt="construction_Image"
        />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.!</p>
      </div>
      <div className="carousel">
        <img
          src={process.env.PUBLIC_URL + "./images/construction/const_img3.jpg"}
          alt="construction_Image"
        />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.!</p>
      </div>
    </Carousel>
  );
};

export { DesignCarousel, ConstructionCarousel };
