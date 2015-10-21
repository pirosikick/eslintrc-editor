'use strict';
import {createActions} from '../util/redux';

const actions = createActions({
  change: (values) => ({ values }),
});

export default actions;
