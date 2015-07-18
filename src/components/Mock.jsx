'use strict';
import cx from 'classnames';
import React, {Component} from "react";

import Header from './Header.jsx';
import Wrapper from './Wrapper.jsx';
import SideMenu from './SideMenu.jsx';
import OptionGroup from './OptionGroup.jsx';
import CheckList from './CheckList.jsx';
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
              <OptionGroup name="Environments" defaultOpened={true}>
                <CheckList
                    id="environments"
                    name="environments"
                    keys={Environments}/>
              </OptionGroup>

              <OptionGroup name="Globals">
              </OptionGroup>

              <OptionGroup name="ecmaFeatures | parser">
                <ul>
                  <li>
                    <label htmlFor="">
                      <input id="" type="radio" name="use-ecma-or-parser-or-nothing"/>
                      <span>none</span>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="">
                      <input id="" type="radio" name="use-ecma-or-parser-or-nothing"/>
                      <span>use ecmaFeatures options</span>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="">
                      <input id="" type="radio" name="use-ecma-or-parser-or-nothing"/>
                      <span>use parser</span>
                    </label>
                  </li>
                </ul>

                <CheckList
                    id="ecma-features"
                    name="ecmaFeatures"
                    keys={ECMAFeatures}/>
              </OptionGroup>

              <OptionGroup name="Rules">
              </OptionGroup>
            </SideMenu>
            <Main className="pure-u-18-24">
            </Main>
          </Wrapper>
        </div>
      );
    }
  }
