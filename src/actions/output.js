import { createAction } from 'redux-actions';

const init = createAction('INIT_OUTPUT');
const reset = createAction('RESET_OUTPUT');
const setEcmaOrParser = createAction('SET_ECMA_OR_PARSER');

export { init, reset, setEcmaOrParser };
