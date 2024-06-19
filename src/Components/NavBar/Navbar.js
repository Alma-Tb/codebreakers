import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
 
  const handleClick = () => setClick(!click);

  return (
    <>
      <nav>
        {" "}
        {/* Add class based on state */}
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            theCODEBREAKERS
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="hide">
              {" "}
              THE CODEBREAKERS FROM BLETCHLEY PARK TO ENIGMA
            </li>

            <li className="nav-item">
              <Link to="/cryptotool" className="nav-links">
                CryptoTool
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/history" className="nav-links">
                History
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/documentation" className="nav-links">
               Documentation
              </Link>
            </li>
            <li className="nav-item dropdown">
  <Link
    to="/"
    className="nav-links dropdown-toggle"
    
  >
    Resources <i className="fas fa-caret-down" />
  </Link>
  {click && (
    <ul className="dropdown-menu">
      <li className="dropdown-item">
        <Link to="/resources" className="dropdown-link">
          Books
        </Link>
      </li>
      <li className="dropdown-item">
        <Link to="/resources" className="dropdown-link">
          Articles
        </Link>
      </li>
      <li className="dropdown-item">
        <Link to="/resources" className="dropdown-link">
          YouTube Channels
        </Link>
      </li>
    </ul>
  )}
</li>
          </ul>

        </div>
      </nav>
    </>
  );
}

export default Navbar;
