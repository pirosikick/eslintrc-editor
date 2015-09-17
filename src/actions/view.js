'use strict';
import {createActions} from '../util/redux';

export default createActions({
  selectMenuItem: (name) => ({ name }),
  showPreview: () => ({}),
  openDocument: url => ({ url }),
  setEcmaOrParser: value => ({ value })
});
