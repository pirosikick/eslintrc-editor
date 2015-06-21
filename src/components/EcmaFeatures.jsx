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
      let lines = _.map(_.keys(options), (name) => {
        return (
          <tr key={name}>
            <td><input id={name} type="checkbox" value={name}/></td>
            <td>
              <label htmlFor={name}>{name}</label>
            </td>
          </tr>
        );
      });

      return (
        <div>
          <h3>ecmaFeatures</h3>

          <a href="javascript:void(0)" onClick={this.checkAll.bind(this)}>check all</a>
          <a href="javascript:void(0)" onClick={this.clearAll.bind(this)}>clear all</a>

          <table className="pure-table pure-table-horizontal">
            <tbody>{lines}</tbody>
          </table>
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
