import React from "react";
import "./degree.css";

const Degree = () => {
  return (
    <div className="degree-wrapper">
      <span className="round">o</span>
      <form className="degree">
        <input
          type="radio"
          className="visually-hidden"
          value="celsium"
          name="button"
          id="celsium"
        ></input>
        <label className="degree__type degree__celsius" htmlFor="celsium">
          C
        </label>

        <input
          className="visually-hidden"
          type="radio"
          value="fahrenheit"
          name="button"
          id="fahrenheit"
        ></input>
        <label className="degree__type degree__fahrenheit" htmlFor="fahrenheit">
          F
        </label>
      </form>
    </div>
  );
};

export default Degree;
