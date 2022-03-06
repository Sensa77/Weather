import React from "react";
import "./main.css";
import pictureCloud from "./../../img/cloud.png";
import picturePartly from "../../img/partly.png";
import pictureRain from "../../img/rain.png";
import pictureStorm from "../../img/storm.png";
import pictureSun from "../../img/sun.png";
import { useSelector } from "react-redux";
import { characteristicsSelector } from "../../app/appSlice";

const Main = () => {
  const characteristics = useSelector(characteristicsSelector);
  const weatherType = characteristics.weather[0].main;
  const weatherImg = () => {
    if (weatherType === "Clear") {
      return pictureSun;
    } else if (weatherType === "Clouds") {
      return pictureCloud;
    } else if (weatherType === "Rain") {
      return pictureRain;
    } else if (weatherType === "ThunderStorm") {
      return pictureStorm;
    } else if (weatherType === "Drizzle") {
      return pictureRain;
    } else if (weatherType === "Snow") {
      return pictureCloud;
    }
  };
  return (
    <>
      <div className="weather">
        <div className="degree-main">
          <img
            className="degree-main__icon"
            width="200px"
            height="200px"
            src={weatherImg()}
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
