"use strict";
import React, {Component, PropTypes} from "react";
import Environments from './Environments.jsx';
import EcmaFeatures from "./EcmaFeatures.jsx";
import Globals from "./Globals.jsx";

export default class App extends Component {
  render () {
    return (
      <div className="pure-g">
        <div className="nav pure-u-1-5">
          <h1 className="title">.eslintrc generator</h1>

          <div className="pure-menu">
            <ul className="pure-menu-list">
              <li className="pure-menu-item">
                <a className="pure-menu-link" href="#">env</a>
              </li>
              <li className="pure-menu-item">
                <a className="pure-menu-link" href="#">globals</a>
              </li>
              <li className="pure-menu-item">
                <a className="pure-menu-link" href="#">ecmaFeatures &amp; parser</a>
              </li>
              <li className="pure-menu-item">
                <a className="pure-menu-link" href="#">rules</a>
              </li>
            </ul>
          </div>

          <button className="pure-button">Generate</button>

        </div>

        <div className="pure-u-1-5">

          <Environments/>

          <div>
            <h2>ecmaFeatures or parser</h2>

            <ul>
              <li>
                <label htmlFor="radio-ecma-features">
                  <input id="radio-ecma-features" type="radio" name="ecma-features-or-parser"/>
                  use ecmaFeatures
                </label>
              </li>
              <li>
                <label htmlFor="radio-parser">
                  <input id="radio-parser" type="radio" name="ecma-features-or-parser"/>
                  use parser
                </label>
              </li>
            </ul>

            <EcmaFeatures/>

            <h3>parser</h3>

            <div className="pure-form">
              <select id="" name="">
                <option value="esprima">esprima</option>
                <option value="esprima-fb">esprima-fb</option>
                <option value="babel-eslint">babel-eslint</option>
              </select>
            </div>
          </div>

          <Globals/>

          <div>
            <h2>Rules</h2>

            <div className="rule rule--selected">
              <header className="rule__header rule-header">
                <h3 className="rule-header__name">command-dangle</h3>
              </header>

              <div className="rule__content">
                <form className="pure-form">


                  <label htmlFor="status-off">
                    <input id="status-off" type="radio" name="status" value="off"/>
                    off
                  </label>
                  <label htmlFor="status-warn">
                    <input id="status-warn" type="radio" name="status" value="warn"/>
                    warning
                  </label>
                  <label htmlFor="status-error">
                    <input id="status-error" type="radio" name="status" value="error"/>
                    error
                  </label>

                  <div className="rule-options">
                    <h4>Options</h4>

                    <div className="rule-options__option rule-option">
                      <label htmlFor="">option1</label>
                      <select id="" name="">
                        <option value="never">never(default)</option>
                        <option value="always">always</option>
                        <option value="always-multiline">always-multiline</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>

        <div className="pure-3-5">
          <div className="doc"></div>
        </div>
      </div>
    );
  }
}
