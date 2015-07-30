"use strict";
import React, {Component} from "react";
import {createRedux} from 'redux';
import {Provider} from 'redux/react';
import * as stores from './stores/app';
import App from "./components/App.jsx";

const redux = createRedux(stores);

class Outer extends Component {
  render () {
    return (
      <Provider redux={redux}>
        {() => <App/>}
      </Provider>
    );
  }
}

React.render(<Outer/>, document.body);
