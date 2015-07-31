import {isArray, isObject, each} from 'lodash';
import React, {Component} from "react";
import ruleSchema from "../constants/eslintRuleSchema.json";

class RuleArgumentInteger extends Component {
  render() {
    return <input {...this.props} type="number"/>;
  }
}

class RuleArgumentObject extends Component {
  render() {
    let {properties} = this.props;

    let lists = [];
    each(properties, (v, k) => {
      lists.push(
        <li className="rule-arg-object__item">
          <RuleArgumentBool name={k}/>
        </li>
      );
    });

    return <ul className="rule-arg-object">{lists}</ul>;
  }
}

class RuleArgumentEnum extends Component {
  render() {
    let {values} = this.props;

    return (
      <select {...this.props}>
        {values.map(v => <option value={v}>{v}</option>)}
      </select>
    );
  }
}

class RuleArgumentOneOf extends Component {
  render() {
    return (
      <ul></ul>
    );
  }
}

class RuleArgumentBool extends Component {
  render() {
    let {name} = this.props;

    return (
      <label className="rule-arg-bool" htmlFor="">
        <input
          className="rule-arg-bool__checkbox"
          id=""
          type="checkbox"
          name=""/>
        <span>{name}</span>
      </label>
    );
  }
}

class RuleArgument extends Component {
  render() {
    let {ruleName, index, options} = this.props;

    let form = (() => {
      if (options.enum) {
        return <RuleArgumentEnum id=""
                                 className="rule-arg__options"
                                 values={options.enum}/>;
      } else if (isObject(options)) {
        switch (options.type) {
        case 'object':
          return <RuleArgumentObject properties={options.properties}/>;
        case 'integer':
          return <RuleArgumentInteger />;
        }
      }

      return '';
    })();


    return (
      <div className="rule-arg">
        <div className="rule-arg__index">
          <span className="rule-arg__index-no">{index + 1}</span>
        </div>
        <div className="rule-arg__form">
          {form}
        </div>
      </div>
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
            <li className="rule-status__item"><input type="radio" name="status-comma-dangle" /></li>
            <li className="rule-status__item"><input type="radio" name="status-comma-dangle" /></li>
            <li className="rule-status__item"><input type="radio" name="status-comma-dangle" /></li>
          </ul>
        </header>
        {body}
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
              <li className="rule-status__item"><span className="rule-status__label">N(0)</span></li>
              <li className="rule-status__item"><span className="rule-status__label">W(1)</span></li>
              <li className="rule-status__item"><span className="rule-status__label">E(2)</span></li>
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
