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

class RadioSet extends Component {
  static defaultProps = {
    defaultValue: ""
  }

  render () {
    let {name, options, defaultValue} = this.props;

    return (
      <ul className="radioset">{
        options.map((o) => (
          <li className="radioset__item">
            <label htmlFor={`${name}-${o.value}`}>
              <input
                id={`${name}-${o.value}`}
                type="radio"
                name={name}
                value={o.value}
                defaultChecked={o.value === defaultValue}/>
              <span className="radioset__text">{o.label}</span>
            </label>
          </li>
        ))
      }</ul>
    );
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
                <div className="globals-option">
                  <div className="globals-option__form pure-form">
                    <input id="" type="text" name=""/>
                    <button className="globals-option__plus pure-button">
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>

                  <table>
                    <thead>
                      <tr>
                        <th>name</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>React</td>
                        <td>true</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

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
            </Main>
          </Wrapper>
        </div>
      );
    }
  }
