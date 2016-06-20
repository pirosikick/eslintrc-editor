import {combineReducers} from 'redux';
import {Map} from 'immutable';

function toggleRuleEnabled(state, name) {
  return state.setIn(['enabled', name], !state.getIn(['enabled', name]));
}

function focusRule(state, focused) {
  return state.set('focused', focused);
}

const initialState = Map({
  focused: '',
  enabled: Map({})
});

function rules(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_RULE_ENABLED':
      return toggleRuleEnabled(state, action.name);
    case 'FOCUS_RULE':
      return focusRule(state, action.name);
    default:
      return state;
  }
}

export default combineReducers({ rules });
