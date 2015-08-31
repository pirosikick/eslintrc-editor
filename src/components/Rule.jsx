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
      this.argLen = isArray(schema) ? schema.length : 0;
      this.state = { currentArgs: new Array(this.argLen + 1) }
    }

    onChangeArg(e) {
      let {index, value} = e;
      let {name} = this.props;
      let {currentArgs} = this.state;

      currentArgs[index] = value;

      if (this.argLen == 0 || currentArgs[0] == 0) {
        this.emitChange(name, currentArgs[0]);
      } else if (currentArgs[0]) {
        this.emitChange(name, currentArgs);
      }

      this.setState({ currentArgs });
    }

    emitChange(name, args) {
      setTimeout(() => this.props.onChange({ name, args }));
    }

    onChangeStatus(e) {
      this.onChangeArg({ index: 0, value: e.value - 0 });
    }

    render() {
      let {name, schema} = this.props;
      let {currentArgs} = this.state;
      let disabled = !currentArgs[0];

      schema = isArray(schema) ? schema : [];

      let onChangeArg = this.onChangeArg.bind(this);
      let args = schema.map((options, index) => (
        <RuleArgument
          ruleName={name}
          index={index + 1}
          options={options}
          disabled={disabled}
          onChange={onChangeArg}
          />
      ));

      return (
        <div className="rule">
          <header className="rule__header">
            <span className="rule__name">{name}</span>
            <a className="rule__help" href="#"><i className="fa fa-info-circle"></i></a>
            <RuleStatus name={name} onChange={this.onChangeStatus.bind(this)} />
          </header>
          <RuleBody name={name} args={args} disabled={disabled}/>
        </div>
      );
    }
  }

class RuleBody extends Component {
  render() {
    let {name, args, disabled} = this.props;

    if (!args.length) {
      return null;
    }

    return (
      <article
        className={cx('rule__body', {'rule__body--is-disabled': disabled})}>
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
