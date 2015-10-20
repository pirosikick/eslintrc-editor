import {Component, PropTypes} from "react";
import clone from "lodash/lang/clone";
import isObject from "lodash/lang/isObject";
import isArray from "lodash/lang/isArray";
import each from 'lodash/collection/each';
import noop from 'lodash/utility/noop';
import uniqueid from 'uniqueid';
import cx from 'classnames';
import ArrayValue from './RuleArgumentArray.jsx';

export default
  class RuleArgument extends Component {
    static propTypes = {
      ruleName: PropTypes.string.isRequired,
      def: PropTypes.object.isRequired,
      value: PropTypes.any,
      index: PropTypes.number,
      disabled: PropTypes.bool,
      onChange: PropTypes.func
    };
    static defaultProps = {
      disabled: false,
      onChange: noop
    };

    constructor(props) {
      super(props);
      this.onChange = this.onChange.bind(this);
    }

    render() {
      let {ruleName, def, value, index, disabled, onChange} = this.props;

      return (
        <div className="rule-arg">
          <div className="rule-arg__index">
            <span className="rule-arg__index-no">{index+1}</span>
          </div>
          <div className="rule-arg__input">
            <RuleArgumentInput
              def={def}
              value={value}
              disabled={disabled}
              onChange={this.onChange} />
          </div>
        </div>
      );
    }

    onChange(value) {
      this.props.onChange({ index: this.props.index, value });
    }
  }

class RuleArgumentInput extends Component {
  static propTypes = {
    value: PropTypes.any,
    disabled: PropTypes.bool,
    onChange: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.currentValue = props.value || null;
    this.onChange = this.onChange.bind(this);
  }

  render() {
    let {value, def, disabled} = this.props;
    let props = {
      value: value,
      disabled: disabled,
      onChange: this.onChange
    };

    switch (def.type) {
      case 'enum':
        return <Enum {...props} options={def.options}/>;
      case 'oneOf':
        return <OneOf {...props} defs={def.defs}/>;
      case 'object':
        return <ObjectValue {...props} properties={def.properties}/>;
      case 'integer':
        return <Integer {...props} />;
      case 'string':
        return <String {...props} />;
      case 'bool':
        return <Bool {...props} />;
      case 'array':
        return <ArrayValue {...props} />;
    }
    return null;
  }

  onChange(value) {
    this.currentValue = value;
    this.props.onChange(value);
  }
}

class Integer extends Component {
  render() {
    return (
      <input
        className="rule-arg-integer"
        type="number"
        placeholder="integer"
        value={this.props.value}
        disabled={this.props.disabled}
        onChange={this.onChange.bind(this)} />
    );
  }

  onChange(e) {
    this.props.onChange(e.target.value - 0)
  }
}

class Bool extends Component {
  render() {
    return (
      <input
        className="rule-arg-bool"
        type="checkbox"
        checked={this.props.value}
        disabled={this.props.disabled}
        onChange={this.onChange.bind(this)}/>
    );
  }

  onChange(e) {
    this.props.onChange(e.target.checked)
  }
}

class String extends Component {
  render() {
    return (
      <input
        className="rule-arg-string"
        type="text"
        placeholder="string"
        disabled={this.props.disabled}
        onChange={this.onChange.bind(this)}/>
    );
  }

  onChange(e) {
    this.props.onChange(e.target.value)
  }
}

class ObjectValue extends Component {
  static defaultProps = { value: {} };

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(key, value) {
    let newValue = clone(this.props.value);
    newValue[key] = value;
    this.props.onChange(newValue);
  }

  render() {
    let {value, properties, disabled} = this.props;
    let lines = [];
    each(properties, (def, key) => {
      lines.push(
        <tr>
          <td className="rule-arg-object__name-column">
            <span className="rule-arg-object__name">{key}</span>
          </td>
          <td className="rule-arg-object__input-column">
            <RuleArgumentInput
              value={value[key]}
              def={def}
              disabled={disabled}
              onChange={value => this.onChange(key, value)}/>
          </td>
        </tr>
      );
    })

    return (
      <table className="rule-arg-object">
        <tbody>{lines}</tbody>
      </table>
    );
  }
}

class Enum extends Component {
  render() {
    let {value, options, disabled} = this.props;
    let optionElements = options.map(value =>
      <option value={value}>{value}</option>
    );
    return (
      <select className="rule-arg-options" disabled={disabled} onChange={this.onChange.bind(this)}>
        <option value="">---</option>
        {optionElements}
      </select>
    );
  }

  onChange(e) {
    this.props.onChange(e.target.value || null);
  }
}

class OneOf extends Component {
  static propTypes = {
    defs: PropTypes.array.isRequired,
    disabled: PropTypes.bool,
    value: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.id = uniqueid({ prefix: 'rule-arg-oneof' });
    this.radioName = uniqueid({ prefix: 'rule-arg-oneof-radio' });
    this.onChecked = this.onChecked.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
    this.state = { selected: false, values: [] };
  }

  render() {
    let {defs, disabled} = this.props;
    let items = defs.reduce((items, def, index) => {
      if (index > 0) {
        items.push(<OneOfOr/>);
      }
      items.push(
        <OneOfItem
          key={`${this.id}-${index}`}
          radioName={this.radioName}
          index={index}
          def={def}
          value={this.getValue(index)}
          checked={this.isItemSelected(index)}
          disabled={disabled}
          onChecked={this.onChecked}
          onChangeValue={this.onChangeValue}/>
      );
      return items;
    }, [])

    return <ul className="rule-arg-oneof">{items}</ul>;
  }

  isItemSelected(itemIndex) {
    return this.state.selected === itemIndex;
  }

  getValue(index) {
    return this.state.values[index];
  }

  onChecked(index) {
    this.props.onChange(this.getValue(index));
    this.setState({ selected: index });
  }

  onChangeValue(e) {
    let values = clone(this.state.values);
    values[e.index] = e.value;
    this.setState({ values });

    if (this.isItemSelected(e.index)) {
      this.props.onChange(e.value);
    }
  }
}

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

  render() {
    let {def, value, checked, disabled, radioName} = this.props;

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
            onChange={this.onChecked}/>
        </div>
        <div className="rule-arg-oneof__input-column">
          <RuleArgumentInput
            def={def}
            ref="input"
            value={value}
            disabled={disabled || !checked}
            onChange={this.onChangeValue}/>
        </div>
      </li>
    );
  }

  onChangeValue(value) {
    let {index} = this.props;
    this.props.onChangeValue({ index, value });
  }

  onChecked() {
    this.props.onChecked(this.props.index);
  }
}
