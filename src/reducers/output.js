'use strict';
import {Map, OrderedMap} from 'immutable';
import {createReducer, getActionIds} from '../util/redux';
import actions from '../actions/output';

let intialState = Map({
  env: [],
  globals: {},
  ecmaFeatures: [],
  parser: null,
  rules: OrderedMap()
});

let {
  setEnv,
  setEcmaFeatures,
  setParser,
  setGlobals,
  changeRule
} = getActionIds(actions);

export default createReducer(intialState, {
  [setEnv]: (state, action) =>
    state.set('env', action.env),

  [setEcmaFeatures]: (state, action) =>
    state.set('ecmaFeatures', action.ecmaFeatures),

  [setParser]: (state, action) =>
    state.set('parser', action.parser),

  [setGlobals]: (state, action) =>
    state.set('globals', action.globals),

  [changeRule]: (state, action) =>
    state.setIn(['rules', action.name], action.value),
});
