import React, { Component, PropTypes } from 'react';
import clone from 'lodash/lang/clone';
import isNull from 'lodash/lang/isNull';
import isUndefined from 'lodash/lang/isUndefined';
import isObject from 'lodash/lang/isObject';
import isArray from 'lodash/lang/isArray';
import isBoolean from 'lodash/lang/isBoolean';
import each from 'lodash/collection/each';
import noop from 'lodash/utility/noop';
import uniqueid from 'uniqueid';
import ArrayValue from './RuleArgumentArray';

export default
  class RuleArgument extends Component {
    constructor(props) {
      super(props);
      this.onChange = this.onChange.bind(this);
    }

    onChange(value) {
      this.props.onChange({ index: this.props.index, value });
    }

    render() {
      const { def, value, index, disabled } = this.props;

      return (
        <div className="rule-arg">
          <div className="rule-arg__index">
            <span className="rule-arg__index-no">{index + 1}</span>
          </div>
          <div className="rule-arg__input">
            <RuleArgumentInput
              def={def}
              value={value}
              disabled={disabled}
              onChange={this.onChange}
            />
          </div>
        </div>
      );
    }
  }

RuleArgument.propTypes = {
  index: PropTypes.number,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};
RuleArgument.defaultProps = {
  disabled: false,
  onChange: noop,
};

class RuleArgumentInput extends Component {
  constructor(props) {
    super(props);
    this.currentValue = props.value || null;
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.currentValue = value;
    this.props.onChange(value);
  }

  render() {
    const { value, def, disabled } = this.props;
    const props = {
      value,
      disabled,
      onChange: this.onChange,
    };

    switch (def.type) {
      case 'enum':
        return <Enum {...props} options={def.options} />;
      case 'oneOf':
        return <OneOf {...props} defaultValue={value} defs={def.defs} />;
      case 'object':
        return <ObjectValue {...props} properties={def.properties} />;
      case 'integer':
        return <Integer {...props} />;
      case 'string':
        return <String {...props} />;
      case 'bool':
        return <Bool {...props} />;
      case 'array':
        return <ArrayValue {...props} />;
      default:
        return null;
    }
  }
}

RuleArgumentInput.propTypes = {
  value: PropTypes.any, // eslint-disable-line
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

class Integer extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.onChange(e.target.value - 0);
  }

  render() {
    return (
      <input
        className="rule-arg-integer"
        type="number"
        placeholder="integer"
        value={this.props.value}
        disabled={this.props.disabled}
        onChange={this.onChange}
      />
    );
  }
}

class Bool extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.onChange(e.target.checked);
  }

  render() {
    return (
      <input
        className="rule-arg-bool"
        type="checkbox"
        checked={this.props.value}
        disabled={this.props.disabled}
        onChange={this.onChange}
      />
    );
  }
}

class String extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <input
        className="rule-arg-string"
        type="text"
        placeholder="string"
        disabled={this.props.disabled}
        onChange={this.onChange}
      />
    );
  }
}

class ObjectValue extends Component {
  constructor(props) {
    super(props);
    this.id = uniqueid({ prefix: 'object-value' });
    this.onChange = this.onChange.bind(this);
  }

  onChange(key, value) {
    const newValue = clone(this.props.value);
    newValue[key] = value;
    this.props.onChange(newValue);
  }

  render() {
    const { value, properties, disabled } = this.props;
    const lines = [];
    each(properties, (def, key) => {
      lines.push(
        <tr key={`${this.id}-${key}`}>
          <td className="rule-arg-object__name-column">
            <span className="rule-arg-object__name">{key}</span>
          </td>
          <td className="rule-arg-object__input-column">
            <RuleArgumentInput
              value={value[key]}
              def={def}
              disabled={disabled}
              onChange={v => this.onChange(key, v)}
            />
          </td>
        </tr>
      );
    });

    return (
      <table className="rule-arg-object">
        <tbody>{lines}</tbody>
      </table>
    );
  }
}

ObjectValue.defaultProps = { value: {} };

class Enum extends Component {
  constructor(props) {
    super(props);
    this.id = uniqueid({ prefix: 'rule-arg-enum' });
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.onChange(e.target.value || null);
  }

  render() {
    const { value, options, disabled } = this.props;
    const optionElements = options.map(v =>
      <option key={`${this.id}-${v}`} value={v}>{v}</option>
    );
    return (
      <select
        className="rule-arg-options"
        value={value || ''}
        disabled={disabled}
        onChange={this.onChange}
      >
        <option value="">---</option>
        {optionElements}
      </select>
    );
  }
}

class OneOf extends Component {
  constructor(props) {
    super(props);
    this.id = uniqueid({ prefix: 'rule-arg-oneof' });
    this.radioName = uniqueid({ prefix: 'rule-arg-oneof-radio' });
    this.onChecked = this.onChecked.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
    const { defaultValue, defs } = props;
    this.state = this.guessState(defaultValue, defs);
  }

  onChecked(index) {
    this.props.onChange(this.getValue(index));
    this.setState({ selected: index });
  }

  onChangeValue(e) {
    const values = clone(this.state.values);
    values[e.index] = e.value;
    this.setState({ values });

    if (this.isItemSelected(e.index)) {
      this.props.onChange(e.value);
    }
  }

  getValue(index) {
    return this.state.values[index];
  }

  isItemSelected(itemIndex) {
    return this.state.selected === itemIndex;
  }

  guessState(value, defs) { // eslint-disable-line class-methods-use-this
    const state = { selected: false, values: [] };
    if (isUndefined(value) || isNull(value)) {
      return state;
    }

    defs.forEach((def, index) => {
      if (state.selected !== false) {
        return;
      }

      let matched = false;
      switch (def.type) { // eslint-disable-line default-case
        case 'enum':
          matched = def.options.indexOf(value) >= 0;
          break;
        case 'object':
          matched = isObject(value);
          break;
        case 'array':
          matched = isArray(value);
          break;
        case 'bool':
          matched = isBoolean(value);
          break;
        case 'integer':
          matched = !isNaN(parseInt(value, 10));
          break;
        case 'string':
          matched = typeof (value) === 'string';
      }

      if (matched) {
        state.selected = index;
        state.values[index] = value;
      }
    });

    return state;
  }

  render() {
    const { defs, disabled } = this.props;
    const items = defs.reduce((items, def, index) => { // eslint-disable-line no-shadow
      const key = `${this.id}-${index}`;
      if (index > 0) {
        items.push(<OneOfOr key={`${key}-or`} />);
      }
      items.push(
        <OneOfItem
          key={key}
          radioName={this.radioName}
          index={index}
          def={def}
          value={this.getValue(index)}
          checked={this.isItemSelected(index)}
          disabled={disabled}
          onChecked={this.onChecked}
          onChangeValue={this.onChangeValue}
        />
      );
      return items;
    }, []);

    return <ul className="rule-arg-oneof">{items}</ul>;
  }
}

OneOf.propTypes = {
  defs: PropTypes.array.isRequired, // eslint-disable-line
  disabled: PropTypes.bool,
  defaultValue: PropTypes.any, // eslint-disable-line
};

class OneOfOr extends Component {
  render() {
    return (
      <li className="rule-arg-oneof__item">
        <span className="rule-arg-oneof__or">OR</span>
      </li>
    );
  }
}

class OneOfItem extends Component {
  constructor(props) {
    super(props);
    this.onChecked = this.onChecked.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(value) {
    const { index } = this.props;
    this.props.onChangeValue({ index, value });
  }

  onChecked() {
    this.props.onChecked(this.props.index);
  }

  render() {
    const { def, value, checked, disabled, radioName } = this.props;

    return (
      <li className="rule-arg-oneof__item">
        <div className="rule-arg-oneof__radio-column">
          <input
            className="rule-arg-oneof__radio"
            ref="radio"
            type="radio"
            checked={checked}
            name={radioName}
            disabled={disabled}
            onChange={this.onChecked}
          />
        </div>
        <div className="rule-arg-oneof__input-column">
          <RuleArgumentInput
            def={def}
            ref="input"
            value={value}
            disabled={disabled || !checked}
            onChange={this.onChangeValue}
          />
        </div>
      </li>
    );
  }
}
