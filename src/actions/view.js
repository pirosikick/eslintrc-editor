'use strict';
import {createActions} from '../util/redux';

const actions = createActions({
  selectMenuItem: (name) => ({ name }),
  showPreview: () => ({}),
  openDocument: (url = "docs/user-guide/configuring.md") => {
    return dispatch => {
      fetch(url)
        .then(res => res.text())
        .then(md => {
          dispatch(actions.setDocumentMarkdown(md));
          dispatch(actions.selectMenuItem('document'));
        });
    }
  },
  setDocumentMarkdown: md => ({ md }),
  openRuleDocument: name => actions.openDocument(`docs/rules/${name}.md`),
  setEcmaOrParser: value => ({ value })
});

export default actions;
