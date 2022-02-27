import React from "react";
import "./location.css";

const Location = () => {
  return (
    <div className="location">
      <span className="location__city">Ульяновск</span>
      <div className="location__change">
        <form className="location__form">
          <label className="location__label">
            Сменить город
            <input
              className="location__input"
              type="text"
              placeholder="Введите город"
            ></input>
            <button type="button" className="location__button">
              OK
            </button>
          </label>
        </form>
        <button type="button" className="location__geolocation-button">
          Мое местоположение
        </button>
      </div>
    </div>
  );
};

export default Location;
