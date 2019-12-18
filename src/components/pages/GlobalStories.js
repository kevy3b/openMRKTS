import React from "react";
import Honduras from "./../layout/images/Honduras.jpg";
import styles from "./../styles/GlobalStories.module.css";

const GlobalStories = () => {
  return (
    <div className="container">
      <div className="grid-3 my-3">
        <div className="img-project">
          <a
            href="https://youtu.be/1shRECptczY"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`${styles.libre}`}>
              Honduras - Meet your Local Artisans
            </h2>
            <div className="img-project">
              <img src={Honduras} alt="Project One" className="my-3" />
            </div>
          </a>
        </div>
        {/* <a href="#">
          <div className="img-project">
            <h2>Project Two</h2>

            <img src={Adventure} alt="Project One" className="my-3" />
          </div>
        </a>
        <a href="#">
          <div className="img-project">
            <h2>Project Three</h2>

            <img src={Adventure} alt="Project One" className="my-3" />
          </div>
        </a>
        <a href="#">
          <div className="img-project">
            <h2>Project Four</h2>

            <img src={Adventure} alt="Project One" className="my-3" />
          </div>
        </a>
        <a href="#">
          <div className="img-project">
            <h2>Project Five</h2>

            <img src={Adventure} alt="Project One" className="my-3" />
          </div>
        </a>
        <a href="#">
          <div className="img-project">
            <h2>Project Six</h2>

            <img src={Adventure} alt="Project One" className="my-3" />
          </div>
        </a> */}
      </div>
    </div>
  );
};

export default GlobalStories;
