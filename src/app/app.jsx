import React from "react";
import "./app.css";
import Header from "../components/header/header";
import Main from "../components/main/main";
import Characteristics from "../components/characteristics/characteristics";
import { useSelector } from "react-redux";
import { statusSelector } from "./appSlice";
import Loader from "../components/loader/loader";
import { useDispatch } from "react-redux";
import { citySelector } from "./appSlice";
import { getWeatherData } from "./appSlice";
import { useEffect } from "react";
import Error from "../components/error/error";

const App = () => {
  const city = useSelector(citySelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWeatherData());
  }, [city]);
  const status = useSelector(statusSelector);

  return (
    <div className="app">
      {status === "error" && <Error />}
      {status === "loading" && <Loader />}
      {status === "done" && (
        <>
          <Header></Header>
          <Main></Main>
          <Characteristics></Characteristics>
        </>
      )}
    </div>
  );
};

export default App;
