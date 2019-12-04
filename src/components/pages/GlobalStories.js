import React from "react";
import Adventure from "./../layout/images/Adventure.jpg";

const GlobalStories = () => {
  return (
    <div className="grid-3 my-3">
      <img src={Adventure} alt="Project One" className="my-3" />
      <img src={Adventure} alt="Project Two" className="my-3" />
      <img src={Adventure} alt="Project Three" className="my-3" />
      <img src={Adventure} alt="Project Four" className="my-3" />
      <img src={Adventure} alt="Project Five" className="my-3" />
      <img src={Adventure} alt="Project Six" className="my-3" />
    </div>
  );
};

export default GlobalStories;
