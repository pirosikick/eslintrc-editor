'use strict';
import _ from 'lodash';
import React,{Component} from "react";

export default
  class Globals extends Component {
    constructor (props) {
      super();
      this.state = { globals: [] };
    }

    render () {
      let {globals} = this.state;
      let lines = _.map(globals, (global) => {
        return (
          <tr>
            <td>{global.name}</td>
            <td className="pure-form">
              <select>
                <option value="true" defaultChecked={global.value}>true</option>
                <option value="false" defaultChecked={!global.value}>false</option>
              </select>
            </td>
            <td><a>remove</a></td>
          </tr>
        );
      });

      return (
        <div className="globals">
          <h2>globals</h2>

          <form className="pure-form globals-form">
            <input ref="nameText" type="text" className="globals-form__name"/>
            <button
              className="pure-button"
              onClick={this.add.bind(this)}>+</button>
          </form>

          <table className="pure-table">
            <thead>
              <tr>
                <td>Name</td>
                <td>Value</td>
                <td></td>
              </tr>
            </thead>
            <tbody>{lines}</tbody>
          </table>
        </div>
      );
    }

    add (e) {
      e.preventDefault();
    }
  }

