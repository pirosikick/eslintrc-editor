'use strict';
import {Map, OrderedMap} from 'immutable';
import {createReducer, getActionIds} from '../util/redux';
import actions from '../actions/output';

let intialState = Map({
  env: [],
  globals: {},
  ecmaOrParser: "parser",
  ecmaFeatures: [],
  parser: null,
  rules: {}
});

let {
  init,
  setEnv,
  setEcmaFeatures,
  setParser,
  setGlobals,
  setRules,
  setEcmaOrParser
} = getActionIds(actions);

export default createReducer(intialState, {
  [init]: (state, action) => {
    if (action.output) {
      return Map(action.output);
    }

    return initialState;
  },
  [setEnv]: (state, action) =>
    state.set('env', action.env),

  [setEcmaFeatures]: (state, action) =>
    state.set('ecmaFeatures', action.ecmaFeatures),

  [setParser]: (state, action) =>
    state.set('parser', action.parser),

  [setGlobals]: (state, action) =>
    state.set('globals', action.globals),

  [setRules]: (state, action) =>
    state.set('rules', action.rules),

  [setEcmaOrParser]: (state, action) =>
    state.set('ecmaOrParser', action.value)
});
