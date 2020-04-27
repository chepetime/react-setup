import React from "react";
import ReactDOM from "react-dom";

import "antd/dist/antd.css";
import "./scss/app.scss";

// Version >= 2.4.0
import "swiper/css/swiper.css";

import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

import { makeServer } from "./server";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
