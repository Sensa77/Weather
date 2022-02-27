import React from "react";
import "./app.css";
import Header from "../components/header/header";
import Main from "../components/main/main";
import Characteristics from "../components/characteristics/characteristics";

const App = () => {
  return (
    <div className="app">
      <Header></Header>
      <Main></Main>
      <Characteristics></Characteristics>
    </div>
  );
};

export default App;
