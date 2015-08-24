import {combineReducers} from 'redux';
import {createReducer, getActionIds} from './util/redux';
import {EnvActions, GlobalsActions, RulesActions} from './actions/app';
import Immutable, {Map, Set} from 'immutable';

const envActions = getActionIds(EnvActions);
const env = createReducer([], {
  [envActions.change]: (state, action) => {
    return action.env;
  }
})

const globalsActions = getActionIds(GlobalsActions);
const globals = createReducer(Map({}), {
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

const rulesActions = getActionIds(RulesActions);
const rules = createReducer({}, {
  [rulesActions.change]: (state, action) => action.rules
});

const app = combineReducers({ env, globals, rules });

export default app;
