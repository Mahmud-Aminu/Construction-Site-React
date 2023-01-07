import React from "react";
import { Carousel } from "react-responsive-carousel";
import Images from "./Images";
import "./Carousel.css";

const DesignCarousel = () => {
  return (
    <Carousel showThumbs={false} autoPlay={"true"} infiniteLoop={true}>
      {Images.map((item) => (
        <img src={item.img} alt={item.id} key={item.id} />
      ))}
    </Carousel>
  );
};

export default DesignCarousel;
