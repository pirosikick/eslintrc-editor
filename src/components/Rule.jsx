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
import RuleArguments from './RuleArguments.jsx';

export default
  class Rule extends Component {
    static propTypes = {
      name: PropTypes.string.isRequired,
      schema: PropTypes.any,
      arg: PropTypes.any,
      onChange: PropTypes.func
    };
    static defaultProps = {
      arg: null,
      onChange: noop
    };

    constructor(props) {
      super(props);
      this.onChangeArgs = this.onChangeArgs.bind(this);
      this.onChangeStatus = this.onChangeStatus.bind(this);
      this.onClickTrash = this.onClickTrash.bind(this);
      this.onClickHelp = this.onClickHelp.bind(this);
    }

    render() {
      let {name} = this.props;
      let [status, ...argValues] = this.getArg();
      let schema = this.getSchema();
      let disabled = !status;
      let trashDisabled = !this.props.arg;

      return (
        <div className="rule">
          <Header>
            <span className="rule__name">{name}</span>
            <TrashLink disabled={trashDisabled} onClick={this.onClickTrash} />
            <HelpLink onClick={this.onClickHelp} />
            <Status value={status} name={name} onChange={this.onChangeStatus} />
          </Header>
          <RuleArguments
            ruleName={name}
            schema={schema}
            disabled={disabled}
            values={argValues}
            onChange={this.onChangeArgs} />
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
      return normalizeRuleSchema(
        clone(this.props.schema),
        this.props.name
      );
    }

    onChangeStatus(e) {
      this.emitChange(0, e.value - 0)
    }

    onChangeArgs(e) {
      this.emitChange(e.index + 1, e.value)
    }

    emitChange(index, value) {
      let newArg = this.getArg();
      newArg[index] = value;
      this.props.onChange({
        name: this.props.name,
        arg: newArg
      });
    }

    onClickTrash(e) {
      e.preventDefault();
      this.props.onChange({
        name: this.props.name,
        arg: null
      });
    }

    onClickHelp(e) {
      e.preventDefault();
      this.props.onClickHelp(this.props);
    }
  }

class Header extends Component {
  render() {
    return <header className="rule__header">{this.props.children}</header>;
  }
}

class HelpLink extends Component {
  static propTypes = { onClick: PropTypes.func };
  static defaultProps = { onClick: noop };

  render() {
    return (
      <a
        title="help"
        className="rule__help"
        href="javascript:void(0);"
        onClick={this.props.onClick}>
        <i className="fa fa-question"></i>
      </a>
    );
  }
}

class TrashLink extends Component {
  static propTypes = { onClick: PropTypes.func };
  static defaultProps = { onClick: noop };

  render() {
    let {disabled} = this.props;
    let className = cx("rule__trash", {
      "rule__trash--is-disabled": disabled
    });

    return (
      <a
        title="reset"
        className={className}
        href="javascript:void(0);"
        onClick={this.props.onClick}>
        <i className="fa fa-trash-o"></i>
      </a>
    );
  }
}

class Status extends Component {
  constructor(props) {
    super(props);
    this.id = uniqueid({ prefix: 'rule-status' });
    this.onChecked = this.onChecked.bind(this);
  }

  render() {
    let {name, value} = this.props;
    let items = [0, 1, 2].map(v =>
      <label>
        <input
          className="rule-status__radio"
          type="radio"
          name={this.id}
          value={v}
          checked={v === value}
          onChange={this.onChecked} />
        <span className="rule-status__text">{v}</span>
      </label>
    );

    return (
      <ul className="rule-status">{
        items.map((item, i) =>
          <li
            key={`${this.id}.${i}`}
            className="rule-status__item">{item}</li>
        )
      }</ul>
    );
  }

  onChecked(e) {
    let {name} = this.props;
    let {value} = e.target;

    this.props.onChange({ name, value });
  }
}
