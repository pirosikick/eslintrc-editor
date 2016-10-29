

import { createActions } from '../util/redux';

const actions = createActions({
  reset: () => {},
  change: values => ({ values }),
});

export default actions;
