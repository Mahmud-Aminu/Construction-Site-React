import React from "react";

const Background = (props) => {
  const style = {
    backgroundImage: `url(${process.env.PUBLIC_URL + "/backgroung.jpg"})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "500px",
    boxShadow: "1px 0 0 1px rgb(0, 0, 0, 0.5)",
  };
  return <div style={style}>{props.children}</div>;
};

const AboutBg = (props) => {
  const style = {
    backgroundImage: `url(${process.env.PUBLIC_URL + "/background2.jpg"})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "500px",
    boxShadow: "1px 0 0 1px rgb(0, 0, 0, 0.5)",
  };
  return <div style={style}>{props.children}</div>;
};

const CardBg = (props) => {
  const style = {
    backgroundImage: `url(${process.env.PUBLIC_URL + "/section.jpg"})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "400px",
    boxShadow: "1px 0 0 1px rgb(0, 0, 0, 0.5)",
  };
  return <div style={style}>{props.children}</div>;
};

export { Background, AboutBg, CardBg };
