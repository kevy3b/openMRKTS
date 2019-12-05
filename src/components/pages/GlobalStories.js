import React from "react";
import Adventure from "./../layout/images/Adventure.jpg";

const GlobalStories = () => {
  return (
    <div className="grid-3 my-3">
      <div className="">
        <h2>Project One</h2>
        <div className="img-project">
          <img src={Adventure} alt="Project One" className="my-3" />
        </div>
      </div>
      <div>
        <h2>Project Two</h2>
        <div className="img-project">
          <img src={Adventure} alt="Project One" className="my-3" />
        </div>
      </div>
      <div>
        <h2>Project Three</h2>
        <div className="img-project">
          <img src={Adventure} alt="Project One" className="my-3" />
        </div>
      </div>
      <div>
        <h2>Project Four</h2>
        <div className="img-project">
          <img src={Adventure} alt="Project One" className="my-3" />
        </div>
      </div>
      <div>
        <h2>Project Five</h2>
        <div className="img-project">
          <img src={Adventure} alt="Project One" className="my-3" />
        </div>
      </div>
      <div>
        <h2>Project Six</h2>
        <div className="img-project">
          <img src={Adventure} alt="Project One" className="my-3" />
        </div>
      </div>
    </div>
  );
};

export default GlobalStories;
