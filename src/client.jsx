import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import saveState from 'redux-save-state/localStorage';
import appActions from './actions/app';
import reducers from './reducers/index';
import App from './components/App';

const localStorageKey = 'eslintrcEditor';
const saveToLocalStorage = saveState(localStorageKey, {
  filter: state => {
    const ecmaOrParser = state.view.get('ecmaOrParser');
    const view = { ecmaOrParser };
    const output = state.output.toJS();
    return { output, view };
  },
  debounce: 200,
});

const createStoreWithMiddleware
  = applyMiddleware(thunk, saveToLocalStorage)(createStore);
const store = createStoreWithMiddleware(reducers);

class Outer extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

ReactDOM.render(<Outer />, document.getElementById('app'), () => {
  if (window.localStorage[localStorageKey]) {
    try {
      const deserialized = JSON.parse(window.localStorage[localStorageKey]);
      store.dispatch(appActions.init(deserialized));
    } catch (e) {
      // no use
    }
  }
});
