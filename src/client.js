"use strict";
import "./polyfill";
import {Component} from "react";
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {init} from './actions/app';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import saveState from 'redux-save-state/localStorage';
import reducers from './reducers/index';
import App from "./components/App";

const localStorageKey = "eslintrcEditor";
const saveToLocalStorage = saveState(localStorageKey, {
  filter: state => {
    let ecmaOrParser = state.view.get('ecmaOrParser');
    let view = { ecmaOrParser };
    let output = state.output.toJS();
    return { output, view };
  },
  debounce: 200
});

const createStoreWithMiddleware
  = applyMiddleware(thunk, saveToLocalStorage)(createStore);
const store = createStoreWithMiddleware(reducers);

if (window.localStorage[localStorageKey]) {
  try {
    let deserialized = JSON.parse(window.localStorage[localStorageKey]);
    store.dispatch(init(deserialized));
  } catch (e) {
  }
}

class Outer extends Component {
  render () {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    );
  }
}

ReactDOM.render(<Outer/>, document.getElementById('app'));
