import React, { Fragment } from "react";
import Blanket from "./../layout/images/Blanket.jpg";
import Figurines from "./../layout/images/Figurines.jpg";
import Jars from "./../layout/images/Jars.jpg";
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
      <h1 className="fun-text">
        A CURATED PACKAGE DELIVERED TO YOUR FRONT DOOR.
      </h1>
      <button type="button" className="btn btn-primary fun-btn">
        Join Now!
      </button>
      <section className="go-down">
        <h1 className="m-4 title">How it works.</h1>
        <div className="grid-3">
          <div>
            <img src={Figurines} alt="Figurines"></img>
            <h1>Customize.</h1>
            <p>
              Take our quiz to set your preferences and integrate your
              interests. We promise to search the globe for the best products
              that fit you.{" "}
            </p>
          </div>
          <div>
            <img src={Jars} alt="Jars"></img>
            <h1>Join the Market.</h1>
            <p>
              Unlock all the insights into global markets, local entrepreneurs,
              and cultural phenomenon. Our content is meant to break barriers
              and challenge status quotes while immersing you in new places.
            </p>
          </div>
          <div>
            <h1>Monthly Treasures.</h1>
            <p>
              Every month receive a gift that tells a story delivered to your
              doorstep.{" "}
            </p>
          </div>
        </div>
        <div className="text-center">
          <button type="button" className="my-3 btn btn-primary">
            Join Now!
          </button>
        </div>
      </section>
      <div className="img-wrapper-banner2">
        <img src={Blanket} alt="Blanket"></img>
      </div>
      <div className="over-image p-3">
        <h2 className="white-color">Subscribe to our Newsletter</h2>
        <p className="white-color">
          Sign up with your email address to receive news and updates.
        </p>
        <input type="email" name="emailaddress"></input>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </div>
    </Fragment>
  );
};

export default Membership;
