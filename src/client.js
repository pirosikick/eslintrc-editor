"use strict";
import React, {Component} from "react";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers/index';
import App from "./components/App.jsx";

const store = createStore(reducers);

class Outer extends Component {
  render () {
    return (
      <Provider store={store}>
        {() => <App/>}
      </Provider>
    );
  }
}

React.render(<Outer/>, document.body);
