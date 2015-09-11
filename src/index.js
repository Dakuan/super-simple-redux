import "babel-core/polyfill";
import React from "react";
import { Provider } from "react-redux";
import App from "./view";
import store from "./store";

const data = JSON.parse(document.getElementById("data").value);

React.render(
  <Provider store={store(data)}>
    {() => <App />}
  </Provider>,
  document.getElementById("root")
);
