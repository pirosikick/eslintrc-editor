'use strict';
import {createActions} from '../util/redux';

const actions = createActions({
  reset: () => {},
  change: (value) => ({ value }),
});

export default actions;
