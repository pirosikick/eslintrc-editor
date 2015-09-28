'use strict';
import {Component, findDOMNode, PropTypes} from "react";
import clone from "lodash/lang/clone";
import cx from 'classnames';

const NOOP = function () {};

class RuleArgumentArray extends Component {
  static propTypes = {
    value: PropTypes.array.isRequired,
    onChange: PropTypes.func,
    disabled: PropTypes.bool
  };
  static defaultProps = {
    value: [],
    onChange: NOOP,
    disabled: false
  };

  constructor(props) {
    super(props);
    this.onAdded = this.onAdded.bind(this);
  }

  render() {
    let {value, disabled} = this.props;

    return (
      <div className="rule-arg-array">
        <Input
          value={value}
          onAdded={this.onAdded}
          disabled={disabled} />
        <List items={value} />
      </div>
    );
  }

  onAdded(value) {
    let values = clone(this.props.value);
    values.push(value);
    this.props.onChange(values);
  }
}

class Input extends Component {
  static propTypes = {
    onAdded: PropTypes.func,
    value: PropTypes.array.isRequired,
    disabled: PropTypes.bool
  };
  static defaultProps = {
    onAdded: NOOP,
    disabled: false
  };

  constructor(props) {
    super(props);
    this.state = { buttonDisabled: true };
    this.onInput = this.onInput.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  render() {
    let {value, buttonDisabled} = this.state;

    return (
      <div className="rule-arg-array__input">
        <input
          ref="input"
          className="rule-arg-array__string"
          type="text"
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

class List extends Component {
  render() {
    let {items} = this.props;

    return (
      <ul className="rule-arg-array__list">
        {items.map(item => <li>{item}</li>)}
      </ul>
    );
  }
}

export default RuleArgumentArray;
