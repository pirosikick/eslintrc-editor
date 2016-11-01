import { createAction } from 'redux-actions';

const init = createAction('INIT_APP', (deserialized = {}) => ({
  view: deserialized.view || {},
  output: deserialized.output || {},
}));
const importJSON = createAction('IMPORT_JSON');
const reset = createAction('RESET_APP');

export { init, importJSON, reset };
