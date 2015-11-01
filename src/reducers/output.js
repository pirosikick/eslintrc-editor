'use strict';
import {Map, List} from 'immutable';
import isObject from 'lodash/lang/isObject';
import isArray from 'lodash/lang/isArray';
import reduce from 'lodash/collection/reduce';
import each from 'lodash/collection/each';
import {createReducer, getActionIds} from '../util/redux';
import _app from '../actions/app';
import _output from '../actions/output';
import _env from '../actions/env';
import _globals from '../actions/globals';
import _ecmaFeatures from '../actions/ecmaFeatures';
import _parser from '../actions/parser';
import _rule from '../actions/rule';

const app = getActionIds(_app);
const {setEcmaOrParser} = getActionIds(_output);
const env = getActionIds(_env);
const globals = getActionIds(_globals);
const ecmaFeatures = getActionIds(_ecmaFeatures);
const parser = getActionIds(_parser);
const rule = getActionIds(_rule);

const initialState = Map({
  env: {},
  globals: Map({}),
  ecmaFeatures: {},
  parser: null,
  ecmaOrParser: 'ecmaFeatures',
  rules: Map({})
});

export default createReducer(initialState, {
  [app.init]: (state, {output}) =>
    isObject(output) ? state.merge(output) : state,

  [app.importJSON]: (state, {output}) => {
    if (!isObject(output)) {
      return state;
    }

    if (isObject(output.rules)) {
      let rules = {};
      each(output.rules, (value, key) => {
        rules[key] = isArray(value) ? value : [value];
      });
      output.rules = rules;
    }

    return state.merge(output);
  },

  [app.reset]: () => initialState,

  [env.change]: (state, action) => state.set('env', action.values),

  [globals.add]: (state, {name}) =>
    state.setIn(['globals', name], true),
  [globals.change]: (state, {name, value}) =>
    state.setIn(['globals', name], value),
  [globals.remove]: (state, {name}) =>
    state.deleteIn(['globals', name]),

  [ecmaFeatures.change]: (state, {values}) => state.set('ecmaFeatures', values),

  [parser.change]: (state, {value}) => state.set('parser', value),

  [setEcmaOrParser]: (state, {value}) => state.set('ecmaOrParser', value),

  [rule.changeStatus]: (state, {name, status}) => {
    if (!state.hasIn(['rules', name])) {
      state = state.setIn(['rules', name], List());
    }
    return state.setIn(['rules', name, 0], status);
  },
  [rule.changeArgs]: (state, {name, args}) => {
    return reduce(
      args,
      (state, arg, index) => state.setIn(['rules', name, index+1], arg),
      state
    );
  },
  [rule.remove]: (state, {name}) => state.deleteIn(['rules', name]),
});
