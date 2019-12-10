import React, { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};

const Navbar = () => {
  const width = useWindowSize();
  if (width < 649) {
    return (
      <nav className="navbar bg-light">
        <Link to="/">
          <img className="logo-img" src={logo} alt="Open MRKTS Logo" />
        </Link>
        <ul>
          <li>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-shopping-cart dark-color"></i>
            </a>
          </li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav className="navbar bg-light">
        <Link to="/">
          <img className="logo-img" src={logo} alt="Open MRKTS Logo" />
        </Link>
        <ul>
          <li>
            <Link to="/" id="dark-color">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" id="dark-color">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/globalstories" id="dark-color">
              Global Stories
            </Link>
          </li>
          <li>
            <Link to="/contact" id="dark-color">
              Contact
            </Link>
          </li>
          <li>
            <a
              href="https://www.instagram.com/openmrkts/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram dark-color"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f dark-color"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter dark-color"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-shopping-cart dark-color"></i>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
};

export default Navbar;
