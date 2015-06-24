'use strict';
import _ from 'lodash';
import React, {Component} from "react";

const options = {
  "arrowFunctions": "enable arrow functions",
  "binaryLiterals": "enable binary literals",
  "blockBindings": "enable let and const (aka block bindings)",
  "classes": "enable classes",
  "defaultParams": "enable default function parameters",
  "destructuring": "enable destructuring",
  "forOf": "enable for-of loops",
  "generators": "enable generators",
  "modules": "enable modules and global strict mode",
  "objectLiteralComputedProperties": "enable computed object literal property names",
  "objectLiteralDuplicateProperties": "enable duplicate object literal properties in strict mode",
  "objectLiteralShorthandMethods": "enable object literal shorthand methods",
  "objectLiteralShorthandProperties": "enable object literal shorthand properties",
  "octalLiterals": "enable octal literals",
  "regexUFlag": "enable the regular expression u flag",
  "regexYFlag": "enable the regular expression y flag",
  "restParams": "enable the rest parameters",
  "spread": "enable the spread operator",
  "superInFunctions": "enable super references inside of functions",
  "templateStrings": "enable template strings",
  "unicodeCodePointEscapes": "enable code point escapes",
  "globalReturn": "allow return statements in the global scope",
  "jsx": "enable JSX",
};


export default
  class EcmaFeatures extends Component {
    render () {
      let list = _.map(_.keys(options), (name) => {
        let id = `checkbox-ecma-feature-${name}`;

        return (
          <li className="ecma-feature-options__item ecma-feature-option">
            <label className="ecma-feature-option__label" htmlFor={id}>
              <input
                className="ecma-feature-option__checkbox"
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
          <h3>ecmaFeatures</h3>

          <a href="javascript:void(0)" onClick={this.checkAll.bind(this)}>check all</a>
          <a href="javascript:void(0)" onClick={this.clearAll.bind(this)}>clear all</a>

          <ul className="ecma-feature-options">{list}</ul>
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
