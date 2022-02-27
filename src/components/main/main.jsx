import React from "react";
import "./main.css";

const Main = () => {
  return (
    <>
      <div className="weather">
        <div className="degree">
          <img className="degree__icon" src="#"></img>
          <h2 className="degree__title">-2</h2>
        </div>
        <span className="weather__description">Небольшой снег</span>
      </div>
    </>
  );
};

export default Main;
