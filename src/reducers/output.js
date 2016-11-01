import { handleActions } from 'redux-actions';
import { Map, List } from 'immutable';
import isObject from 'lodash/lang/isObject';
import isArray from 'lodash/lang/isArray';
import reduce from 'lodash/collection/reduce';
import each from 'lodash/collection/each';
import * as app from '../actions/app';
import { setEcmaOrParser } from '../actions/output';
import * as env from '../actions/env';
import * as globals from '../actions/globals';
import * as ef from '../actions/ecmaFeatures';
import * as parser from '../actions/parser';
import * as rule from '../actions/rule';

const initialState = new Map({
  env: {},
  globals: new Map({}),
  ecmaFeatures: {},
  parser: null,
  ecmaOrParser: 'ecmaFeatures',
  rules: new Map({}),
});

const reducer = handleActions({
  [app.init]: (state, action) => (
    isObject(action.payload.output)
      ? state.merge(action.payload.output)
      : state
  ),

  [app.importJSON]: (state, action) => {
    if (!isObject(action.payload.output)) {
      return state;
    }

    const output = action.payload.output;
    const newState = Object.assign({}, output);

    if (isObject(output.rules)) {
      const rules = {};
      each(output.rules, (value, key) => {
        rules[key] = isArray(value) ? value : [value];
      });
      newState.rules = rules;
    }

    return state.merge(newState);
  },

  [app.reset]: () => initialState,

  [setEcmaOrParser]: (state, action) => (
    state.set('ecmaOrParser', action.payload)
  ),

  // env
  [env.change]: (state, action) => state.set('env', action.payload),
  // ecmaFeatures
  [ef.change]: (state, action) => state.set('ecmaFeatures', action.payload),
  // globals
  [globals.add]: (state, action) =>
    state.setIn(['globals', action.payload.name], true),
  [globals.change]: (state, action) =>
    state.setIn(['globals', action.payload.name], action.payload.value),
  [globals.remove]: (state, action) =>
    state.deleteIn(['globals', action.payload.name]),
  // parser
  [parser.change]: (state, action) => (
    state.set('parser', action.payload.value)
  ),
  // rule
  [rule.changeStatus]: (state, action) => {
    const { name, status } = action.payload;

    return state.withMutations(s => {
      if (!s.hasIn(['rules', name])) {
        s.setIn(['rules', name], new List());
      }
      return s.setIn(['rules', name, 0], status);
    });
  },
  [rule.changeArgs]: (state, action) => {
    const { name, args } = action.payload;

    return reduce(
      args,
      (s, arg, index) => s.setIn(['rules', name, index + 1], arg),
      state
    );
  },
  [rule.remove]: (state, action) => (
    state.deleteIn(['rules', action.payload.name])
  ),
}, initialState);

export default reducer;
