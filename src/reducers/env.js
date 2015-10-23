'use strict';
import {createReducer, getActionIds} from '../util/redux';
import actions from '../actions/env';

const initialState = [];
const {change} = getActionIds(actions);

export default createReducer(initialState, {
  [change]: (state, {values}) => values,
});
