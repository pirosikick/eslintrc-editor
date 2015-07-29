import React, {Component} from "react";
import ruleSchema from "../constants/eslintRuleSchema.json";

class Rule extends Component {
  render() {
    let {name, schema} = this.props;

    return (
      <div className="rule">
        <header className="rule__header">
          <span className="rule-list__name">{name}</span>
          <ul className="rule-status">
            <li className="rule-status__item"><input type="radio" name="status-comma-dangle" /></li>
            <li className="rule-status__item"><input type="radio" name="status-comma-dangle" /></li>
            <li className="rule-status__item"><input type="radio" name="status-comma-dangle" /></li>
          </ul>
        </header>
        <article className="rule__body">
          <header className="rule-arg__header">
            <h5 className="rule-arg__title">{name} arguments</h5>
          </header>
          <ul className="rule-arg-list">
            <li className="rule-arg-list__item">
              <div className="rule-arg">
                <label htmlFor="arg1" className="rule-arg__label">
                  <span className="rule-arg__name">arg1</span>
                  <select id="arg1" name="" className="rule-arg__options">
                    <option value="always">always</option>
                    <option value="always-multiline">always-multiline</option>
                    <option value="never">never</option>
                  </select>
                </label>
              </div>
            </li>
            <li className="rule-arg-list__item">
              <div className="rule-arg">
                <label htmlFor="arg1" className="rule-arg__label">
                  <span className="rule-arg__name">arg1</span>
                  <select id="arg1" name="" className="rule-arg__options">
                    <option value="always">always</option>
                    <option value="always-multiline">always-multiline</option>
                    <option value="never">never</option>
                  </select>
                </label>
              </div>
            </li>
          </ul>
        </article>
      </div>
    );
  }
}

export default
  class RuleList extends Component {
    render() {
      return (
        <ul className="rule-list">
          <li className="rule-list__item rule-list__header">
            <ul className="rule-status">
              <li className="rule-status__item"><span className="rule-status__label">None(0)</span></li>
              <li className="rule-status__item"><span className="rule-status__label">Warning(2)</span></li>
              <li className="rule-status__item"><span className="rule-status__label">Error(0)</span></li>
            </ul>
          </li>
          <li className="rule-list__item rule">{ruleSchema.map((rule) => (
            <Rule name={rule.name} schema={rule.schema}/>
          ))}</li>
        </ul>
      );
    }
  }
