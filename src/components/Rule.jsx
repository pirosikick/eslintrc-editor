'use strict';
import _ from 'lodash';
import React, {Component} from "react";

export class RuleStatus extends Component {
  render () {
    const values = ['off', 'warn', 'error'];
    const {name, defaultValue} = this.props;

    _.map(values, (value) => (
      <label htmlFor={`rule-${name}-status-${value}`}>
        <input
          id={`rule-${name}-status-${value}`}
          type="radio"
          name="status" value={value}/>
        {value}
      </label>
    ));

    const {value} = this.props;
    const id = `status-${value}`;

    return (
      <label htmlFor={id}>
        <input id={id} type="radio" name="status" value={value}/>
        {value}
      </label>
    );
  }
}

export default
  class RuleOption extends Component {
    render () {
      let {name} = this.props;

      return (
        <div className="rule rule--selected">
          <header className="rule__header rule-header">
            <h3 className="rule-header__name">command-dangle</h3>
          </header>

          <div className="rule__content">
            <form className="pure-form">
              <RuleStatus value="off"/>
              <RuleStatus value="warn"/>
              <RuleStatus value="error"/>

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
      );
    }
  }
