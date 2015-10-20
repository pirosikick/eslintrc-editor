"use strict";
import {Component} from "react";
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {init as initView} from './actions/view';
import {init as initOutput} from './actions/output';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import saveState from './middlewares/saveState';
import reducers from './reducers/index';
import App from "./components/App.jsx";

const saveToLocalStorage = saveState(state => {
  window.localStorage.eslintrcEditor = JSON.stringify(state.output.toJS());
});

const createStoreWithMiddleware
  = applyMiddleware(thunk, saveToLocalStorage)(createStore);
const store = createStoreWithMiddleware(reducers);

store.dispatch(initView());
if (window.localStorage.eslintrcEditor) {
  let output = JSON.parse(window.localStorage.eslintrcEditor);
  store.dispatch(initOutput(output));
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
