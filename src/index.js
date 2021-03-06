import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "redux/store";
import { getLocationUser } from "./func.js";
if (!localStorage.lat || !localStorage.lng) getLocationUser();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
