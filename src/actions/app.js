import {createActions} from '../util/redux';

export const AppActions = createActions({
  openDocument: (name) => ({ name }),
  showTab: (name) => ({ name })
});

export const EnvActions = createActions({
  change: (env) => ({ env })
});

export const CheckListActions = createActions({
  change: (name, checklist) => ({ name, checklist })
});
