'use strict';
import {createActions} from '../util/redux';

const actions = createActions({
  selectMenuItem: (name, afterLoadDocument = false) => {
    if (name !== 'document' || afterLoadDocument) {
      return { name }
    }

    return actions.openDocument();
  },

  showPreview: () => ({}),
  openDocument: (url = "docs/user-guide/configuring.md") => {
    return dispatch => {
      fetch(url)
        .then(res => res.text())
        .then(md => {
          dispatch(actions.setDocumentMarkdown(md));
          dispatch(actions.selectMenuItem('document', true));
        });
    }
  },
  setDocumentMarkdown: md => ({ md }),
  openRuleDocument: name => actions.openDocument(`docs/rules/${name}.md`),
  openUserGuide: name => {
    if (name === 'rules') {
      return actions.openDocument('docs/rules/README.md');
    }
  },
  setEcmaOrParser: value => ({ value })
});

export default actions;
