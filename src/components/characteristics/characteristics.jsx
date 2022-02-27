import React from "react";
import "./characteristics.css";

const Characteristics = () => {
  return (
    <div className="characteristics">
      <ul className="characteristics__list">
        <li className="characteristics__item">
          <span className="characteristics__item-title">Ветер</span>
          <span className="characteristics__item-value">7.94 м/с</span>
        </li>
        <li className="characteristics__item">
          <span className="characteristics__item-title">Давление</span>
          <span className="characteristics__item-value">1015 рт./ст.</span>
        </li>
        <li className="characteristics__item">
          <span className="characteristics__item-title">Влажность</span>
          <span className="characteristics__item-value">92 рт./ст.</span>
        </li>
        <li className="characteristics__item">
          <span className="characteristics__item-title">Облачность</span>
          <span className="characteristics__item-value">100%</span>
        </li>
      </ul>
    </div>
  );
};

export default Characteristics;
