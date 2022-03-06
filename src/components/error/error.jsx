import React from "react";
import { useSelector } from "react-redux";
import { errorSelector } from "../../app/appSlice";
import error from "../../img/error.png";
import "./error.css";

const Error = () => {
  const errorText = useSelector(errorSelector);
  return (
    <div className="error">
      <span className="error__title">
        {errorText.message === "city not found"
          ? "Такого города не существует. Попробуйте ввести заново"
          : "Кажется что-то пошло не так! Скоро мы все исправим!"}
      </span>
      <img className="error_picture" src={error}></img>
    </div>
  );
};

export default Error;
