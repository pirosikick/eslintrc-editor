'use strict';
import {createActions} from '../util/redux';

const actions = createActions({
  add: name => ({ name }),
  change: (name, value) => ({ name, value }),
  remove: name => ({ name })
});

export default actions;
