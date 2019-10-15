import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import App from "./components/app";
import reducers from "./reducers";

import Counter from "./components/ReactPractice/counter"
import Toggle from "./components/ReactPractice/toggle"
import FontSizer from "./components/ReactPractice/fontsizer"
import ALign from "./components/ReactPractice/align"
import ShowHide from "./components/ReactPractice/showhide"
import Clock from "./components/ReactPractice/clock"
import ChangeColor from "./components/ReactPractice/changecolor"

const createStoreWithMiddleware = applyMiddleware()(createStore);
import "./style/main.scss";


function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
