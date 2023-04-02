//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

import "../styles/index.css";

//import your own components

import App from "./views/App.jsx";

//render your react application
ReactDOM.render(<App />, document.querySelector("#app"));
