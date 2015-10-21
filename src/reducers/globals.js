'use strict';
import {Map} from 'immutable';
import {createReducer, getActionIds} from '../util/redux';
import actions from '../actions/globals';

const initialState = Map({});
const {add, change, remove} = getActionIds(actions);

export default createReducer(initialState, {
  [add]: (state, {name}) => state.set(name, true),
  [change]: (state, {name, value}) => state.set(name, value),
  [remove]: (state, {name}) => state.delete(name)
});

