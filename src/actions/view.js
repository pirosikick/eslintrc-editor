'use strict';
import {createActions} from '../util/redux';

export default createActions({
  showPreview: () => ({}),
  openDocument: url => ({ url }),
  setEcmaOrParser: value => ({ value })
});
