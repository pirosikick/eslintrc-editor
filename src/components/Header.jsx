'use strict';
import React,{Component} from "react";

export default
  class Header extends Component {
    render () {
      return (
        <header className="nav">
          <div className="pure-menu pure-menu-horizontal">
            <a className="pure-menu-heading" href="/">.eslintrc editor</a>
            <ul className="pure-menu-list">
              <li className="pure-menu-item pure-menu-selected">
                <a className="pure-menu-link" href="">Environments</a>
              </li>
              <li className="pure-menu-item">
                <a className="pure-menu-link" href="">Globals</a>
              </li>
              <li className="pure-menu-item">
                <a className="pure-menu-link" href="">ecmaFeatures | parser</a>
              </li>
              <li className="pure-menu-item">
                <a className="pure-menu-link" href="">Rules</a>
              </li>
            </ul>
          </div>
        </header>
      );
    }
  }

