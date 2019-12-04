import React, { Fragment } from "react";
//import Blanket from "./../layout/images/Blanket.jpg";
//import Figurines from "./../layout/images/Figurines.jpg";
//import Jars from "./../layout/images/Jars.jpg";
import Pots from "./../layout/images/Pots.jpg";

const negmargin = {
  "margin-top": "-1rem"
};

const Membership = () => {
  return (
    <Fragment>
      <div className="img-wrapper-banner" style={negmargin}>
        <img src={Pots} alt="Pots"></img>
      </div>
    </Fragment>
  );
};

export default Membership;
