'use strict';
import {Map, OrderedMap} from 'immutable';
import {createReducer, getActionIds} from '../util/redux';
import actions from '../actions/output';

let intialState = Map({
  env: [],
  globals: OrderedMap(),
  ecmaFeatures: {},
  rules: OrderedMap()
});

let {
  setEnv,
  setEcmaFeatures,
  setGlobal,
  removeGlobal,
  changeRule
} = getActionIds(actions);

export default createReducer(intialState, {
  [setEnv]: (state, action) =>
    state.set('env', action.env),

  [setEcmaFeatures]: (state, action) =>
    state.set('ecmaFeatures', action.ecmaFeatures),

  [setGlobal]: (state, action) =>
    state.setIn(['globals', action.name], action.value),

  [removeGlobal]: (state, action) =>
    state.deleteIn(['globals', action.name]),

  [changeRule]: (state, action) =>
    state.setIn(['rules', action.name], action.args),
});
