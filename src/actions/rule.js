

import { createActions } from '../util/redux';
import viewActions from './view';

const actions = createActions({
  changeStatus: (name, status) => ({ name, status }),
  changeArgs: (name, args) => ({ name, args }),
  remove: name => ({ name }),
  openDocument:
    name => viewActions.openDocument(`docs/rules/${name}.md`),
});

export default actions;
