import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";

const Navbar = () => {
  return (
    <nav className="navbar bg-light">
      <Link to="/">
        <img className="logo-img" src={logo} alt="Open MRKTS Logo" />
      </Link>
      <ul>
        <li>
          <Link to="/" id="dark-color">
            About
          </Link>
        </li>
        <li>
          <Link to="/membership" id="dark-color">
            Membership
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
            href="https://www.instagram.com"
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
};

export default Navbar;
