import { createActions } from '../util/redux';

export default createActions({
  init: output => ({ output }),
  reset: () => {},
  setEcmaOrParser: value => ({ value }),
});
