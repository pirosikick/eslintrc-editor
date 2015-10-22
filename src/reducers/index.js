'use strict';
import {combineReducers} from 'redux';
import view from './view';
import output from './output';
import globals from './globals';
import ecmaFeatures from './ecmaFeatures';
import env from './env';
import rules from './rules';

export default combineReducers({
  view, output, globals, ecmaFeatures, env, rules
});
