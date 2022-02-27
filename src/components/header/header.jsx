import React from "react";
import "./header.css";
import Location from "../location/location";
import Degree from "../degree/degree";

const Header = () => {
  return (
    <div className="header">
      <Location></Location>
      <Degree></Degree>
    </div>
  );
};

export default Header;
