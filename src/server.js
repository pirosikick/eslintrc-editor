"use strict";
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';
import App from "./components/App";
import Html from './components/Html';

const createStoreWithMiddleware
  = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const Outer = () => (
  <Provider store={store}>
    <App/>
  </Provider>
);

export const toHtml = () => {
  let app = ReactDOMServer.renderToString(<Outer/>);
  let props = { app };
  return ReactDOMServer.renderToStaticMarkup(<Html {...props}/>);
};
