'use strict';
import React,{Component} from "react";

export default
  class Header extends Component {
    render () {
      return (
        <header className="nav">
          <div className="pure-menu pure-menu-horizontal">
            <a className="pure-menu-heading" href="/">.eslintrc editor</a>
            <ul className="pure-menu-list pure-menu-list-right">
              <li className="pure-menu-item">
                <a className="pure-menu-link" href="http://eslint.org/" target="_blank">ESLint</a>
              </li>
              <li className="pure-menu-item">
                <a className="pure-menu-link" href="https://github.com/pirosikick/eslintrc-editor" target="_blank">Github</a>
              </li>
            </ul>
          </div>
        </header>
      );
    }
  }

