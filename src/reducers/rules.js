'use strict';
import {Map} from 'immutable';
import isArray from 'lodash/lang/isArray';
import {createReducer, getActionIds} from '../util/redux';
import actions from '../actions/rule';

const initialState = Map({});
const {changeStatus, changeArgs, remove} = getActionIds(actions);

export default createReducer(initialState, {
  [changeStatus]: (state, {name, status}) => {
    let value = state.get(name);
    if (isArray(value)) {
      value = [status].concat(value.slice(1));
    } else {
      value = [status];
    }
    return state.set(name, value);
  },
  [changeArgs]: (state, {name, args}) => {
    let value = state.get(name);
    if (isArray(value)) {
      value = [value[0]].concat(args);
    } else {
      value = [0].concat(args);
    }
    return state.set(name, value);
  },
  [remove]: (state, {name}) => state.delete(name)
});

