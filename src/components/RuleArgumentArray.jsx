/* eslint-disable no-script-url, react/jsx-no-bind */
import React, { Component, PropTypes } from 'react';
import uniqueid from 'uniqueid';
import clone from 'lodash/lang/clone';
import isArray from 'lodash/lang/isArray';
import noop from 'lodash/utility/noop';
import remove from 'lodash/array/remove';
import cx from 'classnames';

class RuleArgumentArray extends Component {
  constructor(props) {
    super(props);
    this.id = uniqueid({ prefix: 'rule-arg-array' });
    this.onAdded = this.onAdded.bind(this);
  }

  onAdded(value) {
    const values = this.getValue(true);
    values.push(value);
    this.props.onChange(values);
  }

  onRemove(value) {
    const values = this.getValue(true);
    remove(values, v => v === value);
    this.props.onChange(values.length ? values : null);
  }


  getValue(_clone = false) {
    if (isArray(this.props.value)) {
      return _clone ? clone(this.props.value) : this.props.value;
    }
    return [];
  }

  render() {
    const { disabled } = this.props;
    const value = this.getValue();

    return (
      <div className="rule-arg-array">
        <ul className="rule-arg-array__list">
          <li key={`${this.id}-input`}>
            <Input
              value={value}
              onAdded={this.onAdded}
              disabled={disabled}
            />
          </li>
          {value.map((v, i) =>
            <li key={`${this.id}-value-${i}`}>
              <span className="rule-arg-array__value">{v}</span>
              <TrashButton
                disabled={disabled}
                onClick={this.onRemove.bind(this, v)}
              />
            </li>
          )}
        </ul>
      </div>
    );
  }
}

RuleArgumentArray.propTypes = {
  value: PropTypes.array.isRequired, // eslint-disable-line
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};
RuleArgumentArray.defaultProps = {
  value: [],
  onChange: noop,
  disabled: false,
};

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { buttonDisabled: true };
    this.onInput = this.onInput.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onInput(e) {
    const buttonDisabled = this.isButtonDisabled(e.target.value);
    this.setState({ buttonDisabled });
  }

  onClick() {
    if (!this.state.buttonDisabled) {
      this.props.onAdded(this.getValue());
      this.clearValue();
      this.setState({ buttonDisabled: true });
    }
  }

  getValue() {
    return this.refs.input.value;
  }

  isButtonDisabled(value = this.getValue()) {
    return !value.length || this.props.value.indexOf(value) !== -1;
  }

  clearValue() {
    this.refs.input.value = '';
  }

  render() {
    const { inputValue, buttonDisabled } = this.state;

    return (
      <div className="rule-arg-array__input">
        <input
          ref="input"
          className="rule-arg-array__string"
          type="text"
          value={inputValue}
          placeholder="string"
          disabled={this.props.disabled}
          onInput={this.onInput}
        />
        <PlusButton disabled={buttonDisabled} onClick={this.onClick} />
      </div>
    );
  }
}

Input.propTypes = {
  onAdded: PropTypes.func,
  value: PropTypes.array.isRequired, // eslint-disable-line
  disabled: PropTypes.bool,
};
Input.defaultProps = {
  onAdded: noop,
  disabled: false,
};

class PlusButton extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    this.props.onClick(e);
  }

  render() {
    const className = cx('rule-arg-array__plus', {
      'rule-arg-array__plus--is-disabled': this.props.disabled,
    });

    return (
      <a
        className={className}
        href="javascript:void(0)"
        onClick={this.onClick}
      >
        <i className="fa fa-plus" />
      </a>
    );
  }
}
PlusButton.propTypes = {
  disabled: PropTypes.bool,
};

class TrashButton extends Component {
  render() {
    const { disabled, onClick } = this.props;
    if (disabled) {
      return <span className="rule-arg-array__trash">icon</span>;
    }
    return (
      <a
        className="rule-arg-array__trash"
        href="javascript:void(0);"
        onClick={onClick}
      >
        <i className="fa fa-trash-o" />
      </a>
    );
  }
}

export default RuleArgumentArray;
