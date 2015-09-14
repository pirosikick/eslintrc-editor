'use strict';
import {Map} from 'immutable';
import {createReducer, getActionIds} from '../util/redux';
import actions from '../actions/view';

let {showPreview, openDocument, setEcmaOrParser} = getActionIds(actions);

let initialState = Map({
  selectedMenuItem: 'preview',
  documentUrl: "docs/user-guide/configuring.md",
  ecmaOrParser: "parser"
});

export default createReducer(initialState, {
  [showPreview]: (state, action) =>
    state.set('selectedMenuItem', 'preview'),

  [openDocument]: (state, action) =>
    state.merge({
      selectedMenuItem: 'document',
      documentUrl: action.url || state.get('documentUrl')
    }),

  [setEcmaOrParser]: (state, action) =>
    state.set('ecmaOrParser', action.value)
});
