import { createAction } from 'redux-actions';

const reset = createAction('RESET_ECMA_FEATURES');
const change = createAction('CHANGE_ECMA_FEATURES');

export { reset, change };
