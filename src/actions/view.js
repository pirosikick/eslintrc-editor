'use strict';
import {createActions} from '../util/redux';

const actions = createActions({
  init: () => {
    return dispatch => {
      actions.loadDocument('docs/user-guide/configuring.md')(dispatch);
    };
  },
  selectMenuItem: name => ({ name }),
  showPreview: () => ({}),
  loadDocument: url => {
    return dispatch => {
      return fetch(url)
        .then(res => res.text())
        .then(md => {
          dispatch(actions.setDocumentMarkdown(url, md));
        })
    };
  },
  openDocument: (url = "docs/user-guide/configuring.md") => {
    return dispatch => {
      return actions.loadDocument(url)(dispatch)
        .then(md => {
          dispatch(actions.selectMenuItem('document'));
        });
    }
  },
  setDocumentMarkdown: (url, md) => ({ url, md }),
  openRuleDocument: name => actions.openDocument(`docs/rules/${name}.md`),
  openUserGuide: name => {
    if (name === 'rules') {
      return actions.openDocument('docs/rules/README.md');
    }
  }
});

export default actions;
