import {createActions} from '../util/redux';

export const AppActions = createActions({
  openDocument: (name) => ({ name }),
  showTab: (name) => ({ name })
});

export const EnvActions = createActions({
  change: (env) => ({ env })
});

export const GlobalsActions = createActions({
  add: (name) => ({ name }),
  change: (name, value) => ({ name, value }),
  remove: (name) => ({ name })
});

export const RulesActions = createActions({
  change: rules => ({ rules })
});

export const DocActions = createActions({
  open: url => ({ url })
});
