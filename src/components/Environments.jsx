'use strict';
import _ from 'lodash';
import React, {Component} from "react";

const options = {
  browser: "browser global variables.",
  node: "Node.js global variables and Node.js-specific rules.",
  worker: "web workers global variables.",
  amd: "defines require() and define() as global variables as per the amd spec.",
  mocha: "adds all of the Mocha testing global variables.",
  jasmine: "adds all of the Jasmine testing global variables for version 1.3 and 2.0.",
  phantomjs: "phantomjs global variables.",
  jquery: "jquery global variables.",
  prototypejs: "prototypejs global variables.",
  shelljs: "shelljs global variables.",
  meteor: "meteor global variables.",
  mongo: "mongo global variables.",
  applescript: "applescript global variables.",
  es6: "enable all ECMAScript 6 features except for modules.",
}

export default
  class Envivonments extends Component {
    render () {
      let items = _.map(_.keys(options), (name) => {
        let id = `checkbox-env-${name}`;

        return (
          <li className="env-options__item env-option">
            <label className="env-option__label" htmlFor={id}>
              <input
                className="env-option__checkbox"
                id={id}
                type="checkbox"
                value={name} />
              {name}
            </label>
          </li>
        );
      });

      return (
        <div className="sidemenu__contents">
          <ul className="env-options">{items}</ul>
        </div>
      );
    }

    checkAll () {
      _.each(this.getAllCheckbox(), (checkbox) => {
        checkbox.checked = true;
      });
    }

    clearAll () {
      _.each(this.getAllCheckbox(), (checkbox) => {
        checkbox.checked = false;
      });
    }

    getAllCheckbox () {
      return React.findDOMNode(this).querySelectorAll('input[type=checkbox]');
    }
  }
