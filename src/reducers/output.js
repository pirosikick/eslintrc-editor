'use strict';
import {Map, OrderedMap} from 'immutable';
import {createReducer, getActionIds} from '../util/redux';
import actions from '../actions/output';

let intialState = Map({
  env: [],
  globals: {},
  ecmaFeatures: [],
  rules: OrderedMap()
});

let {
  setEnv,
  setEcmaFeatures,
  setGlobals,
  changeRule
} = getActionIds(actions);

export default createReducer(intialState, {
  [setEnv]: (state, action) =>
    state.set('env', action.env),

  [setEcmaFeatures]: (state, action) =>
    state.set('ecmaFeatures', action.ecmaFeatures),

  [setGlobals]: (state, action) =>
    state.set('globals', action.globals),

  [changeRule]: (state, action) =>
    state.setIn(['rules', action.name], action.args),
});
