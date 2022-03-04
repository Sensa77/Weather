import React from "react";
import { useSelector } from "react-redux";
import { characteristicsSelector } from "../../app/appSlice";
import "./characteristics.css";

const Characteristics = () => {
  const characteristics = useSelector(characteristicsSelector);
  return (
    <div className="characteristics">
      <ul className="characteristics__list">
        <li className="characteristics__item">
          <span className="characteristics__item-title">Ветер</span>
          <span className="characteristics__item-value">
            {Math.trunc(characteristics.wind.speed)} м/с
          </span>
        </li>
        <li className="characteristics__item">
          <span className="characteristics__item-title">Давление</span>
          <span className="characteristics__item-value">
            {characteristics.main.pressure} рт.ст.
          </span>
        </li>
        <li className="characteristics__item">
          <span className="characteristics__item-title">Влажность</span>
          <span className="characteristics__item-value">
            {characteristics.main.humidity} рт.ст.
          </span>
        </li>
        <li className="characteristics__item">
          <span className="characteristics__item-title">Облачность</span>
          <span className="characteristics__item-value">
            {characteristics.clouds.all} %
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Characteristics;
