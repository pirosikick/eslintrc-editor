/* eslint-disable no-script-url */
import React, { Component, PropTypes } from 'react';
import isArray from 'lodash/lang/isArray';
import clone from 'lodash/lang/clone';
import noop from 'lodash/utility/noop';
import cx from 'classnames';
import uniqueid from 'uniqueid';
import actions from '../actions/rule';
import normalizeRuleSchema from '../util/normalizeRuleSchema';
import RuleArguments from './RuleArguments';

export default
  class Rule extends Component {
    constructor(props) {
      super(props);
      this.onChangeArgs = this.onChangeArgs.bind(this);
      this.onChangeStatus = this.onChangeStatus.bind(this);
      this.onClickTrash = this.onClickTrash.bind(this);
      this.onClickHelp = this.onClickHelp.bind(this);
    }

    shouldComponentUpdate(nextProps) {
      return this.props.value !== nextProps.value;
    }

    onChangeStatus(e) {
      const { name } = this.props;
      this.emitAction(actions.changeStatus(name, e.value));
    }

    onChangeArgs(e) {
      const { name } = this.props;
      this.emitAction(actions.changeArgs(name, e.values));
    }

    onClickTrash(e) {
      e.preventDefault();
      const { name } = this.props;
      this.emitAction(actions.remove(name));
    }

    onClickHelp(e) {
      e.preventDefault();
      const { name } = this.props;
      this.emitAction(actions.openDocument(name));
    }

    getStatus() {
      if (isArray(this.props.value)) {
        return this.props.value[0];
      }
      return false;
    }

    getArgs() {
      if (isArray(this.props.value)) {
        return this.props.value.slice(1);
      }
      return [];
    }

    getSchema() {
      return normalizeRuleSchema(
        clone(this.props.schema),
        this.props.name
      );
    }

    emitAction(action) {
      this.props.onAction(action);
    }

    render() {
      const { name } = this.props;
      const status = this.getStatus();
      const args = this.getArgs();
      const schema = this.getSchema();
      const disabled = !status;
      const trashDisabled = !this.props.value;

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
            values={args}
            onChange={this.onChangeArgs}
          />
        </div>
      );
    }
  }

Rule.propTypes = {
  name: PropTypes.string.isRequired,
  onAction: PropTypes.func,
};
Rule.defaultProps = {
  onAction: noop,
};

class Header extends Component {
  render() {
    return <header className="rule__header">{this.props.children}</header>;
  }
}

class HelpLink extends Component {
  render() {
    return (
      <a
        title="help"
        className="rule__help"
        href="javascript:void(0);"
        onClick={this.props.onClick}
      >
        <i className="fa fa-question" />
      </a>
    );
  }
}

HelpLink.propTypes = { onClick: PropTypes.func };
HelpLink.defaultProps = { onClick: noop };

class TrashLink extends Component {
  render() {
    const { disabled } = this.props;
    const className = cx('rule__trash', {
      'rule__trash--is-disabled': disabled,
    });

    return (
      <a
        title="reset"
        className={className}
        href="javascript:void(0);"
        onClick={this.props.onClick}
      >
        <i className="fa fa-trash-o" />
      </a>
    );
  }
}

TrashLink.propTypes = { onClick: PropTypes.func };
TrashLink.defaultProps = { onClick: noop };

class Status extends Component {
  constructor(props) {
    super(props);
    this.id = uniqueid({ prefix: 'rule-status' });
    this.onChecked = this.onChecked.bind(this);
  }

  onChecked(e) {
    const { name } = this.props;
    const { value } = e.target;

    this.props.onChange({ name, value: value - 0 });
  }

  render() {
    const { value } = this.props;
    const items = [0, 1, 2].map(v =>
      <label htmlFor={this.id}>
        <input
          className="rule-status__radio"
          type="radio"
          id={this.id}
          name={this.id}
          value={v}
          checked={v === value}
          onChange={this.onChecked}
        />
        <span className="rule-status__text">{v}</span>
      </label>
    );

    return (
      <ul className="rule-status">{
        items.map((item, i) =>
          <li
            key={`${this.id}.${i}`}
            className="rule-status__item"
          >{item}</li>
        )
      }</ul>
    );
  }
}
