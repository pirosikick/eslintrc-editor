'use strict';
import Immutable, {Map} from 'immutable';
import {createStore, getActionIds} from '../util/redux';
import {AppActions, EnvActions} from '../actions/app';

const actions = getActionIds(AppActions);
const envActions = getActionIds(EnvActions);

export const app = createStore(Map({ docName: 'configure' }), {
  [actions.openDocument]: (state, action) => {
    return state.set('docName', action.name);
  }
});

export const doc = createStore(Map({ name: 'configure' }), {
  [actions.openDocument]: (state, action) => {
    return state.set('name', action.name);
  }
});

console.log(envActions);
export const env = createStore(Map({}), {
  [envActions.change]: (state, action) => {
console.info(action);
    return state.set(action.name, action.value);
  }
})
