'use strict';
import {Map} from 'immutable';
import {createReducer, getActionIds} from '../util/redux';
import actions from '../actions/view';

let {showPreview, openDocument, setEcmaOrParser} = getActionIds(actions);

let initialState = Map({
  mainContents: 'preview',
  documentUrl: "docs/user-guide/configuring.md",
  ecmaOrParser: "parser"
});

export default createReducer(initialState, {
  [showPreview]: (state, action) => state.set({ mainContents: 'preview' }),

  [openDocument]: (state, action) =>
    state.merge({ mainContents: 'document', documentUrl: action.url }),

  [setEcmaOrParser]: (state, action) =>
    state.set('ecmaOrParser', action.value)
});
