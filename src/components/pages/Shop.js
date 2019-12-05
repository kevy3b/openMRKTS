import React, { Fragment } from "react";
import Necklace from "./../layout/images/Necklace.jpg";

const Shop = () => {
  return (
    <Fragment>
      <div className="image-container">
        <img src={Necklace} alt="Necklace" id="necklace" />
      </div>
      <h1>Shop</h1>
    </Fragment>
  );
};

export default Shop;
