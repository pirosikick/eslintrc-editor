'use strict';
import {createActions} from '../util/redux';
import forEachRight from 'lodash/collection/forEachRight';
import isNull from 'lodash/lang/isNull';

export default createActions({
  init: output => ({ output }),
  reset: () => {},
  setEcmaOrParser: value => ({ value })
});
