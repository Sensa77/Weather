import React from "react";
import "./app.css";
import Header from "../components/header/header";
import Main from "../components/main/main";
import Characteristics from "../components/characteristics/characteristics";
import { useSelector } from "react-redux";
import { getGeolocation, statusSelector } from "./appSlice";
import Loader from "../components/loader/loader";
import { useDispatch } from "react-redux";
import { citySelector } from "./appSlice";
import { getWeatherData } from "./appSlice";
import { useEffect } from "react";
import Error from "../components/error/error";

const App = () => {
  const status = useSelector(statusSelector);
  const dispatch = useDispatch();
  useEffect(async () => {
    await dispatch(getGeolocation());
    dispatch(getWeatherData());
  }, []);

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
