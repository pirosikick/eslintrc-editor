import { Map } from 'immutable';
import { createReducer, getActionIds } from '../util/redux';
import _app from '../actions/app';
import _view from '../actions/view';

const { init } = getActionIds(_app);
const {
  selectMenuItem,
  showPreview,
  openRuleDocument,
  setDocumentMarkdown,
  setEcmaOrParser,
} = getActionIds(_view);

const initialState = new Map({
  selectedMenuItem: 'preview',
  documentUrl: '',
  documentMarkdown: '',
  ecmaOrParser: 'parser',
});

export default createReducer(initialState, {
  [init]: (state, { view }) => state.merge(view),

  [selectMenuItem]: (state, action) =>
    state.set('selectedMenuItem', action.name),

  [showPreview]: state =>
    state.set('selectedMenuItem', 'preview'),

  [setDocumentMarkdown]: (state, action) =>
    state.merge({
      documentUrl: action.url,
      documentMarkdown: action.md,
    }),

  [openRuleDocument]: (state, action) =>
    state.merge({
      selectedMenuItem: 'document',
      documentUrl: action.url || state.get('documentUrl'),
    }),

  [setEcmaOrParser]: (state, action) => state.set('ecmaOrParser', action.value),
});
