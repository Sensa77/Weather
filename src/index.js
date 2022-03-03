import React from "react";
import ReactDOM from "react-dom";
import App from "./app/app";
import "./index.css";
import { Provider } from "react-redux";
import store from "./app/store";

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById("root")
);
