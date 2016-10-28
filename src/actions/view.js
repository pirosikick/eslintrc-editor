import { createActions } from '../util/redux';

const actions = createActions({
  init() {
    return dispatch =>
      actions.loadDocument('docs/user-guide/configuring.md')(dispatch);
  },
  selectMenuItem: name => ({ name }),
  loadDocument(url) {
    return dispatch => (
      fetch(url)
        .then(res => res.text())
        .then(md => {
          dispatch(actions.setDocumentMarkdown(url, md));
        })
    );
  },
  openDocument(url = 'docs/user-guide/configuring.md') {
    return dispatch => (
      actions.loadDocument(url)(dispatch)
        .then(() => {
          dispatch(actions.selectMenuItem('document'));
        })
    );
  },
  setDocumentMarkdown: (url, md) => ({ url, md }),
  openRuleDocument: name => actions.openDocument(`docs/rules/${name}.md`),
});

export default actions;
