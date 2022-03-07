import React, { useState } from "react";
import "./location.css";
import { useDispatch } from "react-redux";
import { changeCity, geoSelector, getWeatherData } from "../../app/appSlice";
import { citySelector } from "../../app/appSlice";
import { useSelector } from "react-redux";

const Location = () => {
  const dispatch = useDispatch();
  const city = useSelector(citySelector);
  const [cityName, setCityName] = useState(city);
  const geo = useSelector(geoSelector);
  const [isSearch, setIsSearch] = useState(false);

  const changeWeather = (cityName) => {
    dispatch(changeCity(cityName));
    dispatch(getWeatherData());
  };
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
              onChange={(e) => setCityName(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  setIsSearch(false);
                  if (cityName === "") {
                    return city;
                  } else {
                    changeWeather(cityName);
                  }
                }
              }}
            ></input>
            <button
              type="button"
              className="location__button"
              onClick={() => {
                setIsSearch(false);
                if (cityName === "") {
                  return city;
                } else {
                  changeWeather(cityName);
                }
              }}
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
        <button
          type="button"
          className="location__geolocation-button"
          onClick={() => {
            changeWeather(geo.city || cityName);
          }}
        >
          Мое местоположение
        </button>
      </div>
    </div>
  );
};

export default Location;
