import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import OurMission from "./../layout/images/AboutUs.png";
//import Blanket from "./../layout/images/Blanket.jpg";
import Customize from "./../layout/images/Customize.png";
import JoinTheMarket from "./../layout/images/JoinTheMarket.png";
import QuarterlyTreasures from "./../layout/images/QuarterlyTreasures.png";
//import Pots from "./../layout/images/Pots.jpg";
//import Market from "./../layout/images/market.jpg";
//import Spices from "./../layout/images/spices.jpg";
import styles from "./../styles/Home.module.css";

const negmargin = {
  "margin-top": "-1rem"
};

const Home = () => {
  return (
    <Fragment>
      <div className={`${styles["img-wrapper-banner"]}`} style={negmargin}>
        {/* <img src={Market} alt="Marketplace"></img> */}
        <div className={`${styles["text-and-button"]}`}>
          <h1 className={`${styles["fun-text"]}`}>
            A CURATED PACKAGE DELIVERED TO YOUR FRONT DOOR.
          </h1>
          <Link to="/quiz">
            <button
              type="button"
              className={`btn btn-primary ${styles["fun-btn"]}`}
            >
              Join Now!
            </button>
          </Link>
        </div>
      </div>

      <article className={`${styles["new-container"]}`}>
        <section>
          <h1 className={`m-4 ${styles.title}`}>How it works.</h1>
          <div className="grid-3 text-center">
            <div>
              <img
                className={`${styles["good-img"]}`}
                src={Customize}
                alt="Box and Pencil Icon"
              ></img>
              <h1 className={`${styles.libre}`}>Customize.</h1>
              <p>
                Take our quiz to set your preferences and integrate your
                interests. We promise to search the globe for the best products
                that fit you.{" "}
              </p>
            </div>
            <div>
              <img
                className={`${styles["good-img"]}`}
                src={JoinTheMarket}
                alt="Globe Icon"
              ></img>
              <h1 className={`${styles.libre}`}>Join the Market.</h1>
              <p>
                Unlock all the insights into global markets, local
                entrepreneurs, and cultural phenomenon. Our content is meant to
                break barriers and challenge status quotes while immersing you
                in new places.
              </p>
            </div>
            <div>
              <img
                className={`${styles["good-img"]}`}
                src={QuarterlyTreasures}
                alt="Calendar and Key Icon"
              ></img>
              <h1 className={`${styles.libre}`}>Quarterly Treasures.</h1>
              <p>
                Every season receive a gift that tells a story delivered to your
                doorstep. We promise to scour the world searching for the best
                brands and products for you. Everything we purchase is ethically
                sourced and tells a story.{" "}
              </p>
            </div>
          </div>
          <div className="text-center">
            <Link to="/quiz">
              <button type="button" className="my-3 btn btn-primary">
                Join Now!
              </button>
            </Link>
          </div>
        </section>

        <hr />
        <h1 className={`text-center m-4 ${styles.title}`}>Our Philosophy</h1>
        <div className="text-center grid-3 m-3">
          <div>
            <h2 className={`${styles.libre}`}>Community</h2>
            <p>
              The world is becoming a smaller place! We are a melting pot of
              ideologies, cultures, and backgrounds and ALL of us have something
              incredible to offer and teach the world. Open MRKTS is all about
              embracing it.
            </p>
          </div>
          <div>
            <h2 className={`${styles.libre}`}>Empower</h2>
            <p>
              Our vision is to give credit where credit is due. To all those
              talented and hard working entrepreneurs in every crevice of the
              globe, we want to share your story. Our goal is to shape views on
              global economies and encourage open markets!{" "}
            </p>
          </div>
          <div>
            <h2 className={`${styles.libre}`}>Share</h2>
            <p>
              We bring the best products and most creative ideas that come from
              exploring the world to your doorstep. We want to make that
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
        <div className="grid-2 my-3">
          <h2 className={`${styles.libre}`}>A global emporium.</h2>
          <p>
            Open MRKTS was founded in 2019 as a forum of free trade and global
            emporium where anyone from anywhere can experience the wonders of
            multiculturalism and the amazing products that come out of it. Our
            objective is to empower small vendors from all over the world that
            have a vision they want to share. We bring that passion, those
            products, and culture to your doorstep with our beautifully wrapped
            gift boxes. Each item has a unique story it tells and we capture
            that through every box we send.
          </p>
        </div>
      </article>
      <div class="elfsight-app-d882abaf-dd6c-4e87-8619-4992e1c6a09e"></div>
      <div className={`${styles["img-wrapper-banner2"]}`}>
        {/* <img src={Spices} alt="Blanket"></img> */}
        <div className={`${styles["over-image"]} p-3`}>
          <h2 className={`light-color ${styles["text-shadow"]}`}>
            Subscribe to our Newsletter
          </h2>
          <p className={`light-color ${styles["text-shadow"]}`}>
            Sign up with your email address to receive news and updates.
          </p>
          <form name="newsletter" method="post">
            <input type="hidden" name="form-name" value="newsletter" />
            <input type="email" name="emailaddress" />
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
