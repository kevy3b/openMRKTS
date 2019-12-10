import React from "react";
import WhiteLogo from "./images/whitelogo.png";

const Footer = () => {
  return (
    <footer id="bg-footer">
      {/* <h1>
        Open <br /> MRKTS
      </h1> */}
      <img
        src={WhiteLogo}
        alt="white version of logo"
        className="logo-img-footer m-2"
      />
      <p id="figcaption">© 2019 Open MRKTS™. ALL RIGHTS RESERVED.</p>
    </footer>
  );
};

export default Footer;
