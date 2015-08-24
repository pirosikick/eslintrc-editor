import {isArray} from 'lodash';
import cx from 'classnames';
import uniqueid from 'uniqueid';
import React, {Component, findDOMNode} from "react";
import RuleArgument from './RuleArgument.jsx';

class RuleStatus extends Component {
  constructor(props) {
    super(props);
    this.inputName = uniqueid({ prefix: this.props.name });
  }

  onClick(e) {
    let {name} = this.props;
    let {value} = e.target;

    this.props.onChange({ name, value });
  }

  render() {
    let {name} = this.props;

    return (
      <ul className="rule-status">
        {
          [0, 1, 2].map((value) => (
            <li key={`rule-status-${name}-${value}`}
                className="rule-status__item">
              <input
                type="radio"
                name={this.inputName}
                value={value}
                onClick={this.onClick.bind(this)} />
            </li>
          ))
        }
      </ul>
    );
  }
}

export default
  class Rule extends Component {
    constructor(props) {
      super(props);

      let {schema} = props;
      let argLen = isArray(schema) ? schema.length : 0;

      this.state = { args: new Array(argLen) }
    }

    onChangeArg(index, value) {
      let {name} = this.props;
      let {args} = this.state;

      args[index] = value;

      this.props.onChange({ name, args });
      this.setState({ args });
    }

    onChangeStatus(e) {
      this.onChangeArg(0, e.value);
    }

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
            <RuleStatus name={name} onChange={this.onChangeStatus.bind(this)} />
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
