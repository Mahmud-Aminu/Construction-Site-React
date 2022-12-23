import React, { useState } from "react";
import SocialIcons from "../UI/SocialIcons";
import "./Navigation.css";

export default function Navigation() {
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

  return (
    <nav className="nav">
      <div className="header">
        <img
          className="img"
          src={process.env.PUBLIC_URL + "/icon2.jpg"}
          alt=""
        />
        <h1>Mantsolha</h1>
      </div>
      <div className="action">
        <div>
          <SocialIcons />
        </div>

        <ul className={isActive}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
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
