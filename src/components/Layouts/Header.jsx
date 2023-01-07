import React from "react";
import Navigation from "./Navigation.jsx";

const Header = (props) => {
  return (
    <>
      <Navigation
        scrollProjectView={props.scrollProjectView}
        onContactView={props.onContactView}
      />
    </>
  );
};

export default Header;
