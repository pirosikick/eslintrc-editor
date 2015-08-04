'use strict';
import Immutable, {Map} from 'immutable';
import {createStore, getActionIds} from '../util/redux';
import {
  AppActions,
  EnvActions,
  GlobalsActions
} from '../actions/app';

const actions = getActionIds(AppActions);

export const app = createStore(
  Map({
    docName: 'configure',
    selectedTabName: 'preview',
  }),
  {
    [actions.openDocument]: (state, action) => {
      return state.set('docName', action.name);
    },

    [actions.showTab]: (state, action) => {
      return state.set('selectedTabName', action.name);
    }
  }
);

export const doc = createStore(Map({ name: 'configure' }), {
  [actions.openDocument]: (state, action) => {
    return state.set('name', action.name);
  }
});

const envActions = getActionIds(EnvActions);
export const env = createStore([], {
  [envActions.change]: (state, action) => {
    return action.env;
  }
})

const globalsActions = getActionIds(GlobalsActions);
export const globals = createStore(Map({}), {
  [globalsActions.change]: (state, action) => {
    return state.set(action.name, action.value);
  },

  [globalsActions.add]: (state, action) => {
    return state.set(action.name, true);
  },

  [globalsActions.remove]: (state, action) => {
    return state.remove(action.name);
  }
});
