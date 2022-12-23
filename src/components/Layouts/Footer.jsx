import { Divider } from "@mui/material";
import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* column-1 */}
          <div className="col">
            <h4>MANTSOLHA ASSOCIATES CONCEPT LIMITED</h4>

            <ul className="list">
              <li>+234 (0), 8030441981, 8074642426</li>
              <li>mantsolha.associates.concept@gmail.com</li>
              <li>
                <h4>Head Office </h4>
                <p>No A3 Mogadishu City Centre, Kaduna North, Kaduna State</p>
              </li>
              <Divider />
              <li>
                <h4>Branch Office </h4>
                <p>Yahaya Madaki, Tudun Matawalle, Katsina, Katsina State</p>
              </li>
            </ul>
          </div>
          {/* column 2 */}
          <div className="col">
            <h4>Links</h4>
            <ul className="list">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>

              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="separator" />
        <div className="row">
          <p className="col-sm">
            &copy; 2022 - {new Date().getFullYear()} MAC | All rights reserved |
            Terms of service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}
