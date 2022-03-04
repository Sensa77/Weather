import React from "react";
import error from "../../img/error.png";
import "./error.css";

const Error = () => {
  return (
    <div className="error">
      <span className="error__title">
        Кажется что-то пошло не так! Скоро мы все исправим!
      </span>
      <img className="error_picture" src={error}></img>
    </div>
  );
};

export default Error;
