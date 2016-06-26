import './global';
import React from 'react';
import {render} from 'react-dom';
import {combineReducers, createStore} from 'redux';
import {connect, Provider} from 'react-redux';
import {createSelector} from 'reselect';
import RuleForm from './components/RuleForm';
import RuleList from './components/RuleList';
import reducers from './reducers';

import ruleMetas from './rule-metas';

const App = ({
  rules,
  ruleEnabled,
  focusedRule,
  onToggleRuleEnabled,
  onFocusRule
}) => {
  return (
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-2">
        <h1>Rules</h1>
        <ul>{
          Object.keys(ruleMetas).map(name =>
            <li key={`plugin.${name}`}>
              <a>{name}</a>
            </li>
          )
        }</ul>
      </div>
      <div className="col-md-3">
        <RuleList
          plugin="eslint"
          rules={ruleMetas.eslint}
          checked={ruleEnabled}
          focused={focusedRule}
          onToggleEnabled={onToggleRuleEnabled}
          onFocus={onFocusRule}/>
      </div>
      <div className="col-md-4">
        {
          focusedRule
            ? <RuleForm
                name={focusedRule.name}
                schemata={focusedRule.schemata} />
            : ''
        }
      </div>
    </div>
  </div>
  )
};

const rulesSelector = state => state.rules;
const ruleEnabledSelector = createSelector(
  rulesSelector,
  rules => rules.reduce((enabled, value, name) => {
    enabled[name] = value.enabled;
    return enabled;
  }, {})
);
const focusedRuleSelector = createSelector(
  rulesSelector,
  rules => {
    const name = rules.get('focused');
    const ruleMeta = ruleMetas.eslint[name];
    return ruleMeta ? {
      name,
      schemata: ruleMeta.schema || []
    } : false;
  }
);

const mapStateToProps = state => ({
  rules: rulesSelector(state),
  ruleEnabled: ruleEnabledSelector(state),
  focusedRule: focusedRuleSelector(state)
});
const mapDispatchToProps = dispatch => ({
  onToggleRuleEnabled: name =>
    dispatch({ type: 'TOGGLE_RULE_ENABLED', name }),
  onFocusRule: name =>
    dispatch({ type: 'FOCUS_RULE', name })
});
const Wrapped = connect(mapStateToProps, mapDispatchToProps)(App);

const store = createStore(
  reducers,
  {},
  window.devToolsExtension && window.devToolsExtension()
);

render(
  <Provider store={store}>
    <Wrapped/>
  </Provider>,
  document.getElementById('app')
);
