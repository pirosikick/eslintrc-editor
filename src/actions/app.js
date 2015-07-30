import {createActions} from '../util/redux';

export const AppActions = createActions({
  openDocument: (name) => ({ name })
});

export const EnvActions = createActions({
  //change: (name, value) => ({ name, value })
  change: (name, value) => {
console.info(name, value);
    return {name, value}
  }
});
