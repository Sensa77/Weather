import React, { useState } from "react";
import "./location.css";
import { useDispatch } from "react-redux";
import { changeCity } from "../../app/appSlice";
import { citySelector } from "../../app/appSlice";
import { useSelector } from "react-redux";

const Location = () => {
  const dispatch = useDispatch();
  const city = useSelector(citySelector);
  const [isSearch, setIsSearch] = useState(false);
  return (
    <div className="location">
      {isSearch ? (
        <>
          <form className="location__form">
            <input
              className="location__input"
              type="text"
              placeholder="Введите город"
              id="loc"
              onChange={(e) => dispatch(changeCity(e.target.value))}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  dispatch(changeCity(e.target.value));
                  setIsSearch(false);
                }
              }}
            ></input>
            <button
              type="button"
              className="location__button"
              onClick={() => setIsSearch(false)}
            >
              OK
            </button>
          </form>
        </>
      ) : (
        <>
          <span className="location__city">{city}</span>
        </>
      )}
      <div className="location__change">
        <button
          type="button"
          className="location__label"
          onClick={() => setIsSearch(true)}
        >
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
