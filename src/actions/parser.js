import { createAction } from 'redux-actions';

export const change = createAction('CHANGE_PARSER', value => ({ value }));
export default { change };
