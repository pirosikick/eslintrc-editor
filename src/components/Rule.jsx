import {isArray} from 'lodash';
import cx from 'classnames';
import uniqueid from 'uniqueid';
import React, {Component} from "react";
import RuleArgument from './RuleArgument.jsx';

export default
  class Rule extends Component {
    render() {
      let {name, schema} = this.props;

      schema = isArray(schema) ? schema : [];

      let args = schema.map((options, index) => (
        <RuleArgument
          ruleName={name}
          index={index}
          options={options} />
      ));

      return (
        <div className="rule">
          <header className="rule__header">
            <span className="rule-list__name">{name}</span>
            <ul className="rule-status">
              {
                [0, 1, 2].map((value) => (
                  <li key={`rule-status-${name}-${value}`}
                      className="rule-status__item">
                    <input
                      type="radio"
                      name={`rule-status-${name}`}
                      value={value} />
                  </li>
                ))
              }
            </ul>
          </header>
          <RuleBody name={name} args={args} />
        </div>
      );
    }
  }

class RuleBody extends Component {
  render() {
    let {name, args} = this.props;

    if (!args.length) {
      return null;
    }

    return (
      <article
        className="rule__body">
        <header className="rule-arg__header">
          <h5 className="rule-arg__title">{name} arguments</h5>
        </header>
        <ul className="rule-arg-list">
          {args.map((arg) => (
            <li className="rule-arg-list__item">{arg}</li>
          ))}
        </ul>
      </article>
    );
  }
}
