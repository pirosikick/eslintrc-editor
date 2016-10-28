import { createActions } from '../util/redux';

export default createActions({
  init(deserialized = {}) {
    const view = deserialized.view || {};
    const output = deserialized.output || {};
    return { view, output };
  },
  importJSON: output => ({ output }),
  reset: () => {},
});
