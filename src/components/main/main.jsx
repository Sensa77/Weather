import React from "react";
import "./main.css";
import cloud from "./../../img/cloud.png";

const Main = () => {
  return (
    <>
      <div className="weather">
        <div className="degree-main">
          <img
            className="degree-main__icon"
            src={cloud}
            width="200px"
            height="200px"
          ></img>
          <h2 className="degree__title">-2°</h2>
        </div>
        <span className="weather__description">небольшой снег</span>
      </div>
    </>
  );
};

export default Main;
