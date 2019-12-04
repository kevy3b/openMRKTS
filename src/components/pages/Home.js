import React, { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <h1 className="text-center m-4 title">Our Philosophy</h1>
      <div className="text-center grid-3">
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
    </Fragment>
  );
};

export default Home;
