'use strict';
import {Map} from 'immutable';
import isObject from 'lodash/lang/isObject';
import isArray from 'lodash/lang/isArray';
import {createReducer, getActionIds} from '../util/redux';
import _app from '../actions/app';
import _env from '../actions/env';
import _globals from '../actions/globals';
import _ecmaFeatures from '../actions/ecmaFeatures';
import _parser from '../actions/parser';
import _rule from '../actions/rule';

const app = getActionIds(_app);
const env = getActionIds(_env);
const globals = getActionIds(_globals);
const ecmaFeatures = getActionIds(_ecmaFeatures);
const parser = getActionIds(_parser);
const rule = getActionIds(_rule);

const initialState = Map({
  env: [],
  globals: {},
  ecmaFeatures: [],
  parser: null,
  rules: {}
});

export default createReducer(initialState, {
  [app.init]: (state, {output}) =>
    isObject(output) ? state.merge(output) : state,

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

  [rule.changeStatus]: (state, {name, status}) => {
    let value = state.getIn(['rules', name]);
    if (isArray(value)) {
      value = [status].concat(value.slice(1));
    } else {
      value = [status];
    }
    return state.setIn(['rules', name], value);
  },
  [rule.changeArgs]: (state, {name, args}) => {
    let value = state.getIn(['rules', name]);
    if (isArray(value)) {
      value = [value[0]].concat(args);
    } else {
      value = [0].concat(args);
    }
    return state.setIn(['rules', name], value);
  },
  [rule.remove]: (state, {name}) => state.deleteIn(['rules', name]),
});
