'use strict';
import {Map, OrderedMap} from 'immutable';
import {createReducer, getActionIds} from '../util/redux';
import actions from '../actions/output';

const initialState = Map({
  env: [],
  globals: {},
  ecmaOrParser: "parser",
  ecmaFeatures: [],
  parser: null,
  rules: {}
});

const {
  init,
  reset,
  setEnv,
  setEcmaFeatures,
  setParser,
  setGlobals,
  setRules,
  setEcmaOrParser
} = getActionIds(actions);

export default createReducer(initialState, {
  [init]: (state, action) => {
    if (action.output) {
      return Map(action.output);
    }

    return initialState;
  },
  [reset]: () => initialState,
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
