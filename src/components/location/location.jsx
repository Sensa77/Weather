import React from "react";
import "./location.css";

const Location = () => {
  return (
    <div className="location">
      <span className="location__city">Ульяновск</span>
      <form className="location__form">
        <input
          className="location__input"
          type="text"
          placeholder="Введите город"
          id="loc"
        ></input>
        <button type="button" className="location__button">
          OK
        </button>
      </form>
      <div className="location__change">
        <button type="button" className="location__label">
          Сменить город
        </button>
        <button type="button" className="location__geolocation-button">
          Мое местоположение
        </button>
      </div>
    </div>
  );
};

export default Location;
