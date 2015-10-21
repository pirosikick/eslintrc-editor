'use strict';
import {combineReducers} from 'redux';
import view from './view';
import output from './output';
import globals from './globals';
import ecmaFeatures from './ecmaFeatures';

export default combineReducers({
  view, output, globals, ecmaFeatures
});
