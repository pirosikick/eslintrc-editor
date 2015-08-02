import React, {Component} from "react";
import Rule from './Rule.jsx';
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
