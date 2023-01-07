import React, { useState } from "react";
import { Link } from "react-router-dom";
import SocialIcons from "../UI/SocialIcons";
import Button from "../UI/Button";
import "./Navigation.css";

export default function Navigation(props) {
  const [isActive, setIsActive] = useState("nav__menu");
  const [isToggler, setIsToggler] = useState("burger");

  const expandNavBarHandle = () => {
    isActive === "nav__menu"
      ? setIsActive("nav__menu nav-active navLinkFade")
      : setIsActive("nav__menu");
    isToggler === "burger"
      ? setIsToggler("burger toggle")
      : setIsToggler("burger");
  };

  const closeNavBraHAndle = () => {
    setIsActive("nav__menu");
    setIsToggler("burger");
  };

  return (
    <nav className="nav">
      <div className="header">
        <img src={process.env.PUBLIC_URL + "/micon2.png"} alt="" />
      </div>
      <div className="action">
        <div>
          <SocialIcons />
        </div>

        <ul className={isActive}>
          <li>
            <Link to="/" onClick={closeNavBraHAndle}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeNavBraHAndle}>
              About
            </Link>
          </li>
          <li>
            <Button
              className="btn"
              onClick={() => {
                props.onContactView();
                closeNavBraHAndle();
              }}
            >
              Contact
            </Button>
          </li>
        </ul>

        <div className={isToggler} onClick={expandNavBarHandle}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </nav>
  );
}
