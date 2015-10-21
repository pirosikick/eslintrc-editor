'use strict';
import {combineReducers} from 'redux';
import view from './view';
import output from './output';
import globals from './globals';

export default combineReducers({ view, output, globals });
