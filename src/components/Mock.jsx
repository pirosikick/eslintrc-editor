'use strict';
import cx from 'classnames';
import React, {Component} from "react";
import {Map} from 'immutable';

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

export default
  class Mock extends Component {
    render () {
      return (
        <div className="app">
          <Wrapper className="pure-g">
            <SideMenu className="pure-u-7-24">
              <OptionGroup name="Environments">
                <CheckList
                    id="environments"
                    name="environments"
                    keys={Environments}/>
              </OptionGroup>

              <OptionGroup name="Globals" defaultOpened={true}>
                <GlobalsOption
                  globals={Map({
                    react: true,
                    eslint: false,
                  })}/>
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
              <Header/>
              <TabMenu
                tabs={[
                  {
                    name: 'Preview',
                    component: <Preview target={{
                                                  env: [],
                                                  globals: {},
                                                  ecmaFeatures: {},
                                                  rules: {}
                                                }}/>
                  },
                  {
                    name: 'Document',
                    component: <Document url="docs/user-guide/configuring.md"/> }
                ]}/>
            </Main>
          </Wrapper>
        </div>
      );
    }
  }
