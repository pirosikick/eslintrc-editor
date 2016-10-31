import { Map } from 'immutable';
import { handleActions } from 'redux-actions';
import { init as initApp } from '../actions/app';
import { selectMenuItem, setDocument } from '../actions/view';

const initialState = new Map({
  selectedMenuItem: 'preview',
  documentUrl: '',
  documentMarkdown: '',
  ecmaOrParser: 'parser',
});
const reducer = handleActions({
  [initApp]: (state, action) => state.merge(action.payload.view),

  [selectMenuItem]: (state, action) => (
    state.set('selectedMenuItem', action.paload.name)
  ),

  [setDocument]: (state, action) => (
    state.merge({
      documentUrl: action.payload.url,
      documentMarkdown: action.payload.md,
    })
  ),
}, initialState);

export default reducer;
