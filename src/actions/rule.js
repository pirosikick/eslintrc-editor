import { createAction } from 'redux-actions';

const changeStatus = createAction('RULE_CHANGE_STATUS', (name, status) => ({
  name,
  status,
}));
const changeArgs = createAction('RULE_CHANGE_ARGS', (name, args) => ({
  name,
  args,
}));
const remove = createAction('REMOVE_RULE', name => ({ name }));

export { changeStatus, changeArgs, remove };
