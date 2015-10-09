import {Component, findDOMNode, PropTypes} from "react";
import clone from "lodash/lang/clone";
import isObject from "lodash/lang/isObject";
import {each} from 'lodash';
import uniqueid from 'uniqueid';
import cx from 'classnames';
import ArrayValue from './RuleArgumentArray.jsx';

const NOOP = function () {};

export default
  class RuleArgument extends Component {
    static propTypes = {
      ruleName: PropTypes.string.isRequired,
      index: PropTypes.number,
      options: PropTypes.object,
      disabled: PropTypes.bool,
      onChange: PropTypes.func
    };
    static defaultProps = { onChange: NOOP };

    constructor(props) {
      super(props);
      this.onChange = this.onChange.bind(this);
    }

    render() {
      let {ruleName, value, index, options, disabled, onChange} = this.props;

      return (
        <div className="rule-arg">
          <div className="rule-arg__index">
            <span className="rule-arg__index-no">{index+1}</span>
          </div>
          <div className="rule-arg__input">
            <RuleArgumentInput
              value={value}
              options={options}
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
  static defaultProps = {
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
    let {value, options, disabled} = this.props;
    let type = this.getType();
    let props = {
      value: value,
      disabled: disabled,
      onChange: this.onChange
    };
    switch (type) {
      case 'enum':
        return <Enum {...props} values={options.enum}/>;
      case 'oneOf':
        return <OneOf {...props} args={options.oneOf}/>;
      case 'object':
        return <ObjectValue {...props} properties={options.properties}/>;
      case 'integer':
        return <Integer {...props} />;
      case 'string':
        return <String {...props} />;
      case 'bool':
    case 'boolean':
      return <Bool {...props} />;
    case 'array':
      return <ArrayValue {...props} />;
    }
    return null;
  }

  getType() {
    let {options} = this.props;

    if (!isObject(options)) {
      return false;
    } else if (options.enum) {
      return 'enum';
    } else if (options.oneOf) {
      return 'oneOf';
    }
    return options.type || false;
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
    let {name} = this.props;

    return (
      <input
        className="rule-arg-bool"
        type="checkbox"
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
    each(properties, (options, key) => {
      lines.push(
        <tr>
          <td className="rule-arg-object__name-column">
            <span className="rule-arg-object__name">{key}</span>
          </td>
          <td className="rule-arg-object__input-column">
            <RuleArgumentInput
              value={value[key]}
              options={options}
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
    let {values, disabled} = this.props;
    let options = values.map(v => <option value={v}>{v}</option>);

    return (
      <select className="rule-arg-options" disabled={disabled} onChange={this.onChange.bind(this)}>
        <option value="">---</option>
        {options}
      </select>
    );
  }

  onChange(e) {
    this.props.onChange(e.target.value || null);
  }
}

class OneOf extends Component {
  constructor(props) {
    super(props);
    this.radioName = uniqueid({ prefix: 'rule-arg-oneof-radio' });
    this.onChange = this.onChange.bind(this);
  }

  render() {
    let {args, disabled} = this.props;

    let items = args.reduce((items, arg, index) => {
      if (index > 0) {
        items.push(<OneOfOr/>);
      }

      items.push(
        <OneOfItem
          radioName={this.radioName}
          index={index}
          options={arg}
          disabled={disabled}
          onChange={this.onChange}/>
      );

      return items;
    }, [])

    return <ul className="rule-arg-oneof">{items}</ul>;
  }

  onChange({value}) {
    this.props.onChange(value);
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
  render() {
    let {radioName, disabled, options} = this.props;

    return (
      <li className="rule-arg-oneof__item">
        <div className="rule-arg-oneof__radio-column">
          <input
            className="rule-arg-oneof__radio"
            ref="radio"
            type="radio"
            name={radioName}
            disabled={disabled}
            onChange={this.onChangeRadio.bind(this)}/>
        </div>
        <div className="rule-arg-oneof__input-column">
          <RuleArgumentInput
            options={options}
            ref="input"
            disabled={disabled}
            onChange={this.onChangeInput.bind(this)}/>
        </div>
      </li>
    );
  }

  onChangeInput(value) {
    let {index} = this.props;

    if (this.checked()) {
      this.props.onChange({ index, value });
    }
  }

  onChangeRadio(e) {
    let {index} = this.props;
    this.props.onChange({ index, value: this.currentValue() });
  }

  currentValue() {
    return this.refs.input.currentValue;
  }

  checked() {

    return findDOMNode(this.refs.radio).checked;
  }
}
