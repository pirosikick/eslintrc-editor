import React, {Component} from "react";
import {isArray} from 'lodash';
import RuleArgument from './RuleArgument.jsx';
import ruleSchema from "../constants/eslintRuleSchema.json";

export default
  class RuleList extends Component {
    render() {
      return (
        <ul className="rule-list">
          <li className="rule-list__item rule-list__header">
            <ul className="rule-status">
              <li className="rule-status__item">
                <span className="rule-status__label">N(0)</span>
              </li>
              <li className="rule-status__item">
               <span className="rule-status__label">W(1)</span>
              </li>
              <li className="rule-status__item">
                <span className="rule-status__label">E(2)</span>
              </li>
            </ul>
          </li>
          {ruleSchema.map((rule) => (
            <li key={rule.name} className="rule-list__item">
              <Rule name={rule.name} schema={rule.schema}/>
            </li>
          ))}
        </ul>
      );
    }
  }

class Rule extends Component {
  render() {
    let {name, schema} = this.props;

    let body;
    if (isArray(schema) && schema.length) {
      body = (
        <article className="rule__body">
          <header className="rule-arg__header">
            <h5 className="rule-arg__title">{name} arguments</h5>
          </header>
          <ul className="rule-arg-list">
            {schema.map((options, index) => (
              <li className="rule-arg-list__item">
                <RuleArgument
                  ruleName={name}
                  index={index}
                  options={options} />
              </li>
            ))}
          </ul>
        </article>
      );
    } else {
      body = ""
    }

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
        {body}
      </div>
    );
  }
}


