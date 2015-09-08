import React, {Component, PropTypes} from "react";
import {bindActionCreators} from 'redux';
import {EnvActions, GlobalsActions, RulesActions} from '../actions/app';
import {connect} from 'react-redux';

import Header from './Header.jsx';
import Wrapper from './Wrapper.jsx';
import Main from './Main.jsx';
import SideMenu from './SideMenu.jsx';
import OptionGroup from './OptionGroup.jsx';
import CheckList from './CheckList.jsx';
import RadioSet from './RadioSet.jsx';
import GlobalsOption from './GlobalsOption.jsx';
import Document from './Document.jsx';
import Preview from './Preview.jsx';
import RuleList from './RuleList.jsx';
import TabMenu from './TabMenu.jsx';
import {Environments, ECMAFeatures} from '../constants'
import Rule from './Rule.jsx';
import ruleSchema from "../constants/eslintRuleSchema.json";

@connect(state => ({
  app: state.app,
  doc: state.doc,
  env: state.env,
  rules: state.rules,
  globals: state.globals
}))
export default
  class App extends Component {
    render () {
      let {app, doc, env, rules, globals, dispatch} = this.props;
console.log(rules);
      let _rules = ruleSchema.map(schema =>
        <Rule
          name={schema.name}
          schema={schema.schema}
          onChange={e =>
            dispatch(RulesActions.change(e.name, e.args))} />
      );

      return (
        <div className="app">
          <Wrapper className="pure-g">
            <SideMenu className="pure-u-7-24">
              <OptionGroup name="Environments">
                <CheckList
                  name="env"
                  keys={Environments}
                  defaultChecked={env}
                  onChange={(env) => dispatch(EnvActions.change(env))}
                  />
              </OptionGroup>

              <OptionGroup name="Globals">
                <GlobalsOption
                  globals={globals}
                  {...bindActionCreators(GlobalsActions, dispatch)} />
              </OptionGroup>

              <OptionGroup name="ecmaFeatures | parser">
                <RadioSet
                  name="ecma-or-parser"
                  options={[
                    {value: "", label: "none"},
                    {value: "ecmaFeatures", label: "use ecmaFeatures option"},
                    {value: "parser", label: "use parser option"}
                  ]}
                  defaultValue=""
                  />

                <div className="option">
                  <h4 className="option__title">ecmaFeatures</h4>

                  <CheckList
                      id="ecma-features"
                      name="ecmaFeatures"
                      keys={ECMAFeatures}/>
                </div>

                <div className="option parser-option">
                  <h4 className="option__title">parser</h4>

                  <div className="pure-form">
                    <select className="parser-option__pulldown pure-input-1-2" name="parser">
                      <option value=""></option>
                      <option value="babel-parser">babel-parser</option>
                    </select>
                  </div>
                </div>

              </OptionGroup>

              <OptionGroup name="Rules">
                <RuleList rules={_rules} />
              </OptionGroup>

            </SideMenu>
            <Main className="pure-u-17-24">
              <TabMenu
                tabs={[
                  {
                    name: 'Preview',
                    component:
                      <Preview
                        target={{ env, globals: globals.toObject(), ecmaFeatures: {}, rules: rules.toObject() }} />
                  },
                  {
                    name: 'Document',
                    component:
                      <Document url={doc.url} />

                  }
                ]}/>
            </Main>
          </Wrapper>
        </div>
      );
    }
  }
