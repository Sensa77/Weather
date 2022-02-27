import React from "react";
import "./degree.css";

const Degree = () => {
  return (
    <div className="degree">
      <button className="degree__celsius" type="button">
        C
      </button>
      <button className="degree__fahrenheit" type="button">
        F
      </button>
    </div>
  );
};

export default Degree;
