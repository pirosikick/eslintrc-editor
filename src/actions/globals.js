import { createAction } from 'redux-actions';

const add = createAction('ADD_GLOBAL', name => ({ name }));
const change = createAction('CHANGE_GLOBAL', (name, value) => ({ name, value }));
const remove = createAction('REMOVE_GLOBAL', name => ({ name }));

export { add, change, remove };
