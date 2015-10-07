'use strict';
import {Map} from 'immutable';
import {createReducer, getActionIds} from '../util/redux';
import actions from '../actions/view';

let {
  selectMenuItem,
  showPreview,
  openDocument,
  openRuleDocument,
  setDocumentMarkdown,
  setEcmaOrParser
} = getActionIds(actions);

let initialState = Map({
  selectedMenuItem: 'preview',
  documentUrl: "",
  documentMarkdown: "",
  ecmaOrParser: "parser"
});

export default createReducer(initialState, {
  [selectMenuItem]: (state, action) =>
    state.set('selectedMenuItem', action.name),

  [showPreview]: (state, action) =>
    state.set('selectedMenuItem', 'preview'),

  [setDocumentMarkdown]: (state, action) =>
    state.merge({
      documentUrl: action.url,
      documentMarkdown: action.md
    }),

  [openRuleDocument]: (state, action) =>
    state.merge({
      selectedMenuItem: 'document',
      documentUrl: action.url || state.get('documentUrl')
    }),

  [setEcmaOrParser]: (state, action) =>
    state.set('ecmaOrParser', action.value)
});
