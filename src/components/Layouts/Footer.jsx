import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Footer.css";

const logo = process.env.PUBLIC_URL + "/icon2.png";
export default function Footer(props) {
  const [scrollTop, setScrollTop] = useState(false);

  const handleScrollTop = () => {
    setScrollTop(!scrollTop);
  };
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [scrollTop]);

  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* column-1 */}
          <div className="col">
            <h4>
              {" "}
              <img src={logo} alt="logo" />
              MANTSOLHA ASSOCIATES CONCEPT LIMITED
            </h4>
          </div>
          {/* column 2 */}
          <div className="col2">
            <ul className="list">
              <li>
                <Link to="/" onClick={handleScrollTop}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={handleScrollTop}>
                  About
                </Link>
              </li>
              <li>
                <a href="javascrift:;" onClick={props.onContactView}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="separator" />
        <div className="row">
          <p className="col-sm">
            &copy; {new Date().getFullYear()} Mantsolha Association Concept Ltd.
          </p>
        </div>
      </div>
    </div>
  );
}
