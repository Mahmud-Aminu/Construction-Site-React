import React, { useEffect } from "react";
import { Ourservice } from "./Ourservice";
import Contact from "./Contact";
import Project from "./Project";
import Teams from "./Teams";
import Home from "./Home";

const Main = (props) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const styles = {
    marginTop: "3vh",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "auto",
    textAlign: "center",
    alignItems: "center",
  };

  return (
    <div style={styles}>
      <Home onScroll={props.onContactView} />
      <Ourservice onScroll={props.onContactView} />
      <Project />
      <Teams />

      <Contact cRef={props.cRef} />
    </div>
  );
};

export default Main;
