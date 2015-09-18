'use strict';
import {createActions} from '../util/redux';

export default createActions({
  selectMenuItem: (name) => ({ name }),
  showPreview: () => ({}),
  openDocument: url => ({ url }),
  openRuleDocument: name => ({ url: `docs/rules/${name}.md` }),
  setEcmaOrParser: value => ({ value })
});
