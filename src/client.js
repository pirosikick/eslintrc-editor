"use strict";
import React from "react";
import App from "./components/App.jsx";
import Flux from './flux';

let flux = new Flux();

React.render(<App flux={flux}/>, document.getElementById("app"));
