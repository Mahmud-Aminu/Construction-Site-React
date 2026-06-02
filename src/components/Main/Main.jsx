import React, { useEffect } from "react";
import Home from "./Home";
import WhyChooseUs from "./WhyChooseUs";
import { Ourservice } from "./Ourservice";
import Project from "./Project";
import Gallery from "./Gallery";
import Statistics from "./Statistics";
import Process from "./Process";
import Teams from "./Teams";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import MapSection from "./MapSection";

const Main = ({ cRef }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <main>
      <Home />
      <WhyChooseUs />
      <Ourservice />
      <Project />
      <Gallery />
      <Statistics />
      <Process />
      <Teams />
      <Testimonials />
      <Contact cRef={cRef} />
      <MapSection />
    </main>
  );
};

export default Main;
