import { createAction } from 'redux-actions';
import getText from '../getText';

const selectMenuItem = createAction('SELECT_MENU_ITEM', name => ({ name }));
const setDocument = createAction('SET_DOCUMENT');

function loadDocument(url) {
  return dispatch =>
    getText(url).then(md => dispatch(setDocument({ url, md })));
}

function openDocument(url = 'docs/user-guide/configuring.md') {
  return dispatch => getText(url).then(md => {
    dispatch(setDocument({ url, md }));
    dispatch(selectMenuItem('document'));
  });
}

function openRuleDocument(name) {
  return openDocument(`docs/rules/${name}.md`);
}

function init() {
  return loadDocument('docs/user-guide/configuring.md');
}

export {
  selectMenuItem,
  setDocument,
  loadDocument,
  openDocument,
  openRuleDocument,
  init,
};
