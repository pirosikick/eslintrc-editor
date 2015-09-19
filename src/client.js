"use strict";
import React, {Component} from "react";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';
import App from "./components/App.jsx";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

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
