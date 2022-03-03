import React, { useEffect, useState } from "react";
import "./main.css";
import cloud from "./../../img/cloud.png";
import { useSelector } from "react-redux";
import {
  getWeatherData,
  temperatureSelector,
  characteristicsSelector,
} from "../../app/appSlice";
import { useDispatch } from "react-redux";

const Main = () => {
  const characteristics = useSelector(characteristicsSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWeatherData());
  }, []);
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
            {Math.trunc(characteristics?.main?.temp)}°
          </h2>
        </div>
        <span className="weather__description">небольшой снег</span>
      </div>
    </>
  );
};

export default Main;
