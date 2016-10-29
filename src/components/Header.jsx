/* eslint-disable no-script-url */
import React, { Component } from 'react';
import cx from 'classnames';

export default
  class Header extends Component {
    render() {
      const { selectedTabName } = this.props;

      return (
        <header className="nav">
          <div className="pure-menu pure-menu-horizontal">
            <a className="pure-menu-heading" href="/">.eslintrc editor</a>

            <ul className="pure-menu-list">
              <li
                className={cx(
                  'pure-menu-item',
                  {
                    'pure-menu-selected': selectedTabName === 'preview',
                  }
                )}
              >
                <a className="pure-menu-link" href="javascript:void(0)">Preview</a>
              </li>
              <li
                className={cx(
                  'pure-menu-item',
                  {
                    'pure-menu-selected': selectedTabName === 'document',
                  }
                )}
              >
                <a className="pure-menu-link" href="javascript:void(0)">Document</a>
              </li>
            </ul>

            <ul className="pure-menu-list pure-menu-list-right">
              <li className="pure-menu-item">
                <a className="pure-menu-link" href="http://eslint.org/" target="_blank" rel="noopener noreferrer">ESLint</a>
              </li>
              <li className="pure-menu-item">
                <a className="pure-menu-link" href="https://github.com/pirosikick/eslintrc-editor" target="_blank" rel="noopener noreferrer">Github</a>
              </li>
            </ul>
          </div>
        </header>
      );
    }
  }

