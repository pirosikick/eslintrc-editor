'use strict';
import {Component, findDOMNode, PropTypes} from "react";
import clone from "lodash/lang/clone";
import isArray from "lodash/lang/isArray";
import noop from "lodash/utility/noop";
import remove from "lodash/array/remove";
import cx from 'classnames';

class RuleArgumentArray extends Component {
  static propTypes = {
    value: PropTypes.array.isRequired,
    onChange: PropTypes.func,
    disabled: PropTypes.bool
  };
  static defaultProps = {
    value: [],
    onChange: noop,
    disabled: false
  };

  constructor(props) {
    super(props);
    this.onAdded = this.onAdded.bind(this);
  }

  render() {
    let {disabled} = this.props;
    let value = this.getValue();

    return (
      <div className="rule-arg-array">
        <ul className="rule-arg-array__list">
          <li>
            <Input
              value={value}
              onAdded={this.onAdded}
              disabled={disabled} />
          </li>
          {value.map(v =>
            <li>
              <span className="rule-arg-array__value">{v}</span>
              <TrashButton
                disabled={disabled}
                onClick={this.onRemove.bind(this, v)}/>
            </li>
          )}
        </ul>
      </div>
    );
  }

  getValue(_clone = false) {
    if (isArray(this.props.value)) {
      return _clone ? clone(this.props.value) : this.props.value;
    }
    return [];
  }

  onAdded(value) {
    let values = this.getValue(true);
    values.push(value);
    this.props.onChange(values);
  }

  onRemove(value) {
    let values = this.getValue(true);
    remove(values, v => v === value);
    this.props.onChange(values.length ? values : null);
  }
}

class Input extends Component {
  static propTypes = {
    onAdded: PropTypes.func,
    value: PropTypes.array.isRequired,
    disabled: PropTypes.bool
  };
  static defaultProps = {
    onAdded: noop,
    disabled: false
  };

  constructor(props) {
    super(props);
    this.state = { buttonDisabled: true };
    this.onInput = this.onInput.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  render() {
    let {inputValue, buttonDisabled} = this.state;

    return (
      <div className="rule-arg-array__input">
        <input
          ref="input"
          className="rule-arg-array__string"
          type="text"
          value={inputValue}
          placeholder="string"
          disabled={this.props.disabled}
          onInput={this.onInput} />
        <PlusButton disabled={buttonDisabled} onClick={this.onClick} />
      </div>
    );
  }

  onInput(e) {
    let buttonDisabled = this.isButtonDisabled(e.target.value);
    this.setState({ buttonDisabled });
  }

  onClick() {
    if (!this.state.buttonDisabled) {
      this.props.onAdded(this.getValue());
      this.clearValue();
      this.setState({ buttonDisabled: true });
    }
  }

  isButtonDisabled(value) {
    value = value || this.getValue();
    return !value.length || this.props.value.indexOf(value) !== -1;
  }

  getValue() {
    return findDOMNode(this.refs.input).value
  }

  clearValue() {
    findDOMNode(this.refs.input).value = "";
  }
}

class PlusButton extends Component {
  static propTypes = {
    value: PropTypes.array.isRequired,
    disabled: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  render() {
    let className = cx("rule-arg-array__plus", {
      "rule-arg-array__plus--is-disabled": this.props.disabled
    });

    return (
      <a
        className={className}
        href="javascript:void(0)"
        onClick={this.onClick}>
        <i className="fa fa-plus"></i>
      </a>
    );
  }

  onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    this.props.onClick(e);
  }
}

class TrashButton extends Component {
  render() {
    let {disabled, onClick} = this.props;
    let icon = <i className="fa fa-trash-o"/>;
    if (disabled) {
      return <span className="rule-arg-array__trash">icon</span>;
    }
    return (
      <a
        className="rule-arg-array__trash"
        href="javascript:void(0);"
        onClick={onClick}>
        <i className="fa fa-trash-o"/>
      </a>
    );
  }
}

export default RuleArgumentArray;
