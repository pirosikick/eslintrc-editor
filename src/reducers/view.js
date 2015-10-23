'use strict';
import {Map} from 'immutable';
import {createReducer, getActionIds} from '../util/redux';
import _app from '../actions/app';
import _view from '../actions/view';

let {init} = getActionIds(_app);
let {
  selectMenuItem,
  showPreview,
  openDocument,
  openRuleDocument,
  setDocumentMarkdown,
  setEcmaOrParser
} = getActionIds(_view);

let initialState = Map({
  selectedMenuItem: 'preview',
  documentUrl: "",
  documentMarkdown: "",
  ecmaOrParser: "parser"
});

export default createReducer(initialState, {
  [init]: (state, {view}) => state.merge(view),

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

  [setEcmaOrParser]: (state, action) => state.set('ecmaOrParser', action.value)
});
