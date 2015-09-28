import React, {Component, findDOMNode, PropTypes} from "react";
import isArray from "lodash/lang/isArray";
import clone from "lodash/lang/clone";
import cx from 'classnames';
import uniqueid from 'uniqueid';
import RuleArgument from './RuleArgument.jsx';

const NOOP = function () {};

export default
  class Rule extends Component {
    static propTypes = {
      name: PropTypes.string.isRequired,
      schema: PropTypes.any,
      value: PropTypes.any,
      onChange: PropTypes.func
    };
    static defaultProps = {
      value: 0,
      onChange: NOOP
    };

    constructor(props) {
      super(props);
      this.onChangeArg = this.onChangeArg.bind(this);
    }

    render() {
      let {name} = this.props;
      let [status, ...argValues] = this.getValue();
      let schema = this.getSchema();
      let disabled = !status;

      let args = schema.map((options, index) => {

        return <RuleArgument
          ruleName={name}
          index={index}
          value={argValues[index]}
          options={options}
          disabled={disabled}
          onChange={this.onChangeArg} />
      });

      return (
        <div className="rule">
          <RuleHeader>
            <span className="rule__name">{name}</span>
            <RuleHelpLink onClick={this.onClickHelp.bind(this)} />
            <RuleStatus name={name} onChange={this.onChangeStatus.bind(this)} />
          </RuleHeader>
          <RuleBody name={name} args={args} disabled={disabled}/>
        </div>
      );
    }

    getValue() {
      let value = clone(this.props.value);
      if (!isArray(value)) {
        value = [value];
      }
      return value;
    }

    getSchema() {
      let schema = clone(this.props.schema);
      if (!isArray(schema)) {
        schema = [];
      }
      return schema;
    }

    onChange(index, value) {
      let newValue = this.getValue();
      newValue[index] = value;
      this.props.onChange({
        name: this.props.name,
        value: newValue
      });
    }

    onChangeArg(e) {
      this.onChange(e.index + 1, e.value)
    }

    onChangeStatus(e) {
      this.onChange(0, e.value - 0)
    }

    onClickHelp(e) {
      e.preventDefault();
      this.props.onClickHelp(this.props);
    }
  }

class RuleHeader extends Component {
  render() {
    return <header className="rule__header">{this.props.children}</header>;
  }
}

class RuleHelpLink extends Component {
  static propTypes = { onClick: PropTypes.func };
  static defaultProps = { onClick: NOOP };

  render() {
    return (
      <a
        className="rule__help"
        href="javascript:void(0);"
        onClick={this.props.onClick}>
        <i className="fa fa-question-circle"></i>
      </a>
    );
  }
}

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
