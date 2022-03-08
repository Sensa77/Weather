import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { celsiusSelector } from "../../app/appSlice";
import { changeCelsius, changeFahrenheit } from "../../app/appSlice";
import "./degree.css";

const Degree = () => {
  const celsius = useSelector(celsiusSelector);
  const dispatch = useDispatch();
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
          checked={celsius}
          onChange={() => {
            dispatch(changeCelsius());
          }}
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
          onChange={() => dispatch(changeFahrenheit())}
        ></input>
        <label className="degree__type degree__fahrenheit" htmlFor="fahrenheit">
          F
        </label>
      </form>
    </div>
  );
};

export default Degree;
