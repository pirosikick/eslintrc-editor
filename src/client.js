"use strict";
import React from "react";
import App from "./components/App.jsx";
import FluxComponent from "flummox/component";
import AppFlux from './AppFlux';

let flux = new AppFlux();
flux.getActions('common').init();
let connectToStores = {
  common: store => ({
      commonStore: store,
      json: store.toJson(),
      env: store.state.env,
      ecmaFeatures: store.state.ecmaFeatures
  })
};
let element = (
  <FluxComponent flux={flux} connectToStores={connectToStores}>
    <App />
  </FluxComponent>
)

React.render(element, document.getElementById("app"));
