import React from "react";
import "./main.css";
import cloud from "./../../img/cloud.png";
import { useSelector } from "react-redux";
import { characteristicsSelector } from "../../app/appSlice";

const Main = () => {
  const characteristics = useSelector(characteristicsSelector);

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
          <h2 className="degree__title">
            {Math.trunc(characteristics.main.temp)}°
          </h2>
        </div>
        <span className="weather__description">
          {characteristics.weather[0].description}
        </span>
      </div>
    </>
  );
};

export default Main;
