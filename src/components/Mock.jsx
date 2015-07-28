'use strict';
import cx from 'classnames';
import React, {Component} from "react";

import Header from './Header.jsx';
import Wrapper from './Wrapper.jsx';
import SideMenu from './SideMenu.jsx';
import OptionGroup from './OptionGroup.jsx';
import CheckList from './CheckList.jsx';
import RadioSet from './RadioSet.jsx';
import GlobalsOption from './GlobalsOption.jsx';
import Document from './Document.jsx';
import Preview from './Preview.jsx';
import {Environments, ECMAFeatures} from '../constants'

class Main extends Component {
  render () {
    let {className} = this.props;
    return <div {...this.props} className={cx('main', className)}/>;
  }
}

export default
  class Mock extends Component {
    render () {
      return (
        <div className="app">
          <Header/>
          <Wrapper className="pure-g" offsetHeight="48">
            <SideMenu className="pure-u-6-24">
              <OptionGroup name="Environments">
                <CheckList
                    id="environments"
                    name="environments"
                    keys={Environments}/>
              </OptionGroup>

              <OptionGroup name="Globals" defaultOpened={true}>
                <GlobalsOption
                  globals={[
                    { name: 'react', value: true },
                    { name: 'eslint', value: false }
                  ]}/>
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
              </OptionGroup>
            </SideMenu>
            <Main className="pure-u-18-24">
              <div className="main-menu pure-menu pure-menu-horizontal">
                <ul className="main-menu-list pure-menu-list">
                  <li className="pure-menu-item pure-menu-selected"><a href="#" className="pure-menu-link">Preview</a></li>
                  <li className="pure-menu-item"><a href="#" className="pure-menu-link">Document</a></li>
                </ul>
              </div>
              <Preview target={{ env: [], globals: {}, ecmaFeatures: {}, rules: {} }}/>
              <Document url="docs/user-guide/configuring.md"/>
            </Main>
          </Wrapper>
        </div>
      );
    }
  }
