import React from "react";
import { render } from "react-dom";
import App from "./main";
import * as serviceWorker from "./serviceWorker";

const element = document.getElementById("contact-us-widget");
console.log("element: ", element);
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  element
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
