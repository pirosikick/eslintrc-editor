'use strict';
import Immutable, {Map} from 'immutable';
import {createStore, getActionIds} from '../util/redux';
import {AppActions, EnvActions, CheckListActions} from '../actions/app';

const actions = getActionIds(AppActions);
const envActions = getActionIds(EnvActions);
const checkListActions = getActionIds(CheckListActions);

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

export const env = createStore([], {
  [envActions.change]: (state, action) => {
    return action.env;
  }
})
