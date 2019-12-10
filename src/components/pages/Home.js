import React, { Fragment } from "react";
import OurMission from "./../layout/images/AboutUs.png";
import Blanket from "./../layout/images/Blanket.jpg";
import Figurines from "./../layout/images/Figurines.jpg";
import Jars from "./../layout/images/Jars.jpg";
import Pots from "./../layout/images/Pots.jpg";

const negmargin = {
  "margin-top": "-1rem"
};

const Home = () => {
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
      <section className="go-down container">
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

      <hr />
      <h1 className="text-center m-4 title">Our Philosophy</h1>
      <div className="text-center grid-3 m-3">
        <div>
          <h2>Community</h2>
          <p>
            The world is becoming a smaller place! We are a melting pot of
            ideologies, cultures, and backgrounds and ALL of us have something
            incredible to offer and teach the world. Open MRKTS is all about
            embracing it.
          </p>
        </div>
        <div>
          <h2>Empower</h2>
          <p>
            Our vision is to give credit where credit is due. To all those
            talented and hard working entrepreneurs in every crevice of the
            globe, we want to share your story. Our goal is to shape views on
            global economies and encourage open markets!{" "}
          </p>
        </div>
        <div>
          <h2>Share</h2>
          <p>
            We want to bring the best products and most creative ideas that come
            from exploring the world to your doorstep. We want to make that
            inspiration that comes with traveling a regular phenomenon in your
            life. Hopefully inspiring new adventures in the process.{" "}
          </p>
        </div>
      </div>
      <div className="text-center">
        {/* <button type="button" className="btn btn-primary">
          Join Now!
        </button> */}
      </div>

      <img src={OurMission} alt="Our Mission" className="my-2" />
      <div className="some-down grid-2 my-3">
        <h2>A global emporium.</h2>
        <p>
          Open MRKTS was founded in 2019 as a forum of free trade and global
          exploration where anyone from anywhere can experience the wonders of
          multiculturalism and the amazing products that come out of it. Our
          objective is to empower small vendors from all over the world that
          have a vision they want to share. We bring that passion, those
          products, and culture to your doorstep with our beautifully wrapped
          gift boxes. Each item has a unique story it tells and we want to
          capture that.
        </p>
      </div>
      <div className="img-wrapper-banner2">
        <img src={Blanket} alt="Blanket"></img>
      </div>
      <div className="over-image p-3">
        <h2 className="light-color text-shadow">Subscribe to our Newsletter</h2>
        <p className="light-color text-shadow">
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

export default Home;
