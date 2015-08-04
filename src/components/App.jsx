import React, {Component, PropTypes} from "react";
import {bindActionCreators} from 'redux';
import {EnvActions, GlobalsActions} from '../actions/app';
import {connect} from 'redux/react';

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
import {Environments, ECMAFeatures} from '../constants'

@connect(state => ({
  app: state.app,
  doc: state.doc,
  env: state.env,
  globals: state.globals,
}))
export default
  class App extends Component {
    render () {
      let {app, doc, env, globals, dispatch} = this.props;

      return (
        <div className="app">
          <Wrapper className="pure-g">
            <SideMenu className="pure-u-7-24">
              <OptionGroup name="Environments">
                <CheckList
                  name="env"
                  keys={Environments}
                  defaultChecked={env}
                  onChange={(checked) => {
                    dispatch(EnvActions.change(checked));
                  }}
                  />
              </OptionGroup>

              <OptionGroup name="Globals" defaultOpened={true}>
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
                <RuleList />
              </OptionGroup>
            </SideMenu>
            <Main className="pure-u-17-24">
              <Header selectedTabName={app.get('selectedTabName')}/>
              <Preview target={{ env, globals: globals.toObject(), ecmaFeatures: {}, rules: {} }} hidden={app.selectedTabName=='preview'}/>
              <Document url="docs/user-guide/configuring.md" hidden={app.selectedTabName=='document'}/>
            </Main>
          </Wrapper>
        </div>
      );
    }
  }
