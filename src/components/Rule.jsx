import {Component, findDOMNode, PropTypes} from "react";
import isArray from "lodash/lang/isArray";
import clone from "lodash/lang/clone";
import isNull from 'lodash/lang/isNull';
import isUndefined from 'lodash/lang/isUndefined';
import forEachRight from "lodash/collection/forEachRight";
import noop from 'lodash/utility/noop';
import cx from 'classnames';
import uniqueid from 'uniqueid';
import normalizeRuleSchema from '../util/normalizeRuleSchema';
import RuleArgument from './RuleArgument.jsx';

export default
  class Rule extends Component {
    static propTypes = {
      name: PropTypes.string.isRequired,
      schema: PropTypes.any,
      arg: PropTypes.any,
      onChange: PropTypes.func
    };
    static defaultProps = {
      arg: 0,
      onChange: noop
    };

    constructor(props) {
      super(props);
      this.onChangeArgValue = this.onChangeArgValue.bind(this);
      this.onChangeStatus = this.onChangeStatus.bind(this);
      this.onClickHelp = this.onClickHelp.bind(this);
    }

    render() {
      let {name} = this.props;
      let [status, ...argValues] = this.getArg();
      let schema = this.getSchema();
      let disabled = !status;

      let args = schema.map((def, index) =>
        <RuleArgument
          ruleName={name}
          index={index}
          def={def}
          value={argValues[index]}
          disabled={disabled}
          onChange={this.onChangeArgValue} />
      );

      return (
        <div className="rule">
          <RuleHeader>
            <span className="rule__name">{name}</span>
            <RuleHelpLink onClick={this.onClickHelp} />
            <RuleStatus name={name} onChange={this.onChangeStatus} />
          </RuleHeader>
          <RuleBody name={name} args={args} disabled={disabled}/>
        </div>
      );
    }

    shouldComponentUpdate(nextProps) {
      return this.props.arg !== nextProps.arg;
    }

    getArg() {
      let arg = clone(this.props.arg);
      if (!isArray(arg)) {
        arg = [arg];
      }
      return arg;
    }

    getSchema() {
      let schema = clone(this.props.schema);
      return normalizeRuleSchema(schema);
    }

    onChangeArgValue(e) {
      this.emitChange(e.index + 1, e.value)
    }

    onChangeStatus(e) {
      this.emitChange(0, e.value - 0)
    }

    emitChange(index, value) {
      let newArg = this.getArg();
      newArg[index] = value;
      this.props.onChange({
        name: this.props.name,
        arg: newArg
      });
    }

    onClickHelp(e) {
      e.preventDefault();
      this.props.onClickHelp(this.props);
    }

    minifyArg(arg) {
      let newArg = [];
      // [0, argValue1, argValue2] -> 0
      if (arg[0] === 0) {
        newArg = 0;
      } else {
        // [1, argValue1, null] -> [1, argValue1]
        forEachRight(arg, (value, i) => {
          if (isNull(value)) {
            return;
          }
          newArg[i] = value;
        });
        // [1] -> 1
        if (newArg.length === 1) {
          newArg = newArg[0];
        }
      }

      return newArg;
    }
  }

class RuleHeader extends Component {
  render() {
    return <header className="rule__header">{this.props.children}</header>;
  }
}

class RuleHelpLink extends Component {
  static propTypes = { onClick: PropTypes.func };
  static defaultProps = { onClick: noop };

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
              <label>
                <input
                  className="rule-status__radio"
                  type="radio"
                  name={this.inputName}
                  value={value}
                  onClick={this.onClick.bind(this)} />
                <span className="rule-status__text">{value}</span>
              </label>
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
