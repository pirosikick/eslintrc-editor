'use strict';
import {combineReducers} from 'redux';
import view from './view';
import output from './output';

export default combineReducers({ view, output });
