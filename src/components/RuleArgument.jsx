import {Component, findDOMNode, PropTypes} from "react";
import {isArray, isObject, each} from 'lodash';
import uniqueid from 'uniqueid';
import cx from 'classnames';

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
      let {ruleName, index, options, disabled, onChange} = this.props;

      return (
        <div className="rule-arg">
          <div className="rule-arg__index">
            <span className="rule-arg__index-no">{index}</span>
          </div>
          <div className="rule-arg__input">
            <RuleArgumentInput
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
  constructor(props) {
    super(props);

    this.currentValue = props.defaultValue || null;
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.currentValue = value;
    this.props.onChange(value);
  }

  render() {
    let {options, disabled} = this.props;

    if (options.enum) {
      return <Enum values={options.enum} disabled={disabled} onChange={this.onChange}/>;
    } else if (options.oneOf) {
      return <OneOf args={options.oneOf} disabled={disabled} onChange={this.onChange}/>
    }

    if (isObject(options)) {
      switch (options.type) {
      case 'object':
        return <ObjectValue properties={options.properties} disabled={disabled} onChange={this.onChange}/>;
      case 'integer':
        return <Integer disabled={disabled} onChange={this.onChange} />;
      case 'string':
        return <String disabled={disabled} onChange={this.onChange} />;
      case 'bool':
      case 'boolean':
        return <Bool disabled={disabled} onChange={this.onChange} />;
      case 'array':
        return <ArrayValue disabled={disabled} onChange={this.onChange}/>;
      }
    }

    return null;
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
  constructor(props) {
    super(props);
    this.object = {};
  }

  onChange(key, value) {
    this.object[key] = value;
    this.props.onChange(this.object);
  }

  render() {
    let {properties, disabled} = this.props;

    let lines = [];
    each(properties, (options, key) => {
      let onChange = this.onChange.bind(this, key);

      lines.push(
        <tr>
          <td className="rule-arg-object__name-column">
            <span className="rule-arg-object__name">{key}</span>
          </td>
          <td className="rule-arg-object__input-column">
            <RuleArgumentInput options={options} disabled={disabled} onChange={onChange}/>
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
    let {values} = this.props;
    let options = values.map(v => <option value={v}>{v}</option>);

    return (
      <select className="rule-arg-options" disabled={this.props.disabled} onChange={this.onChange.bind(this)}>
        <option>---</option>
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

class ArrayValue extends Component {
  static defaultProps = {
    values: []
  }

  constructor(props) {
    super(props);

    let {values} = props;

    this.state = { value: "", values: values, plusDisabled: true };
    this.onInput = this.onInput.bind(this);
    this.onPlus = this.onPlus.bind(this);
  }

  render() {
    let {value, values, plusDisabled} = this.state;

    return (
      <div className="rule-arg-array">
        <div className="rule-arg-array__input">
          <input
            ref="input"
            className="rule-arg-array__string"
            type="text"
            placeholder="string"
            defaultValue={value}
            disabled={this.props.disabled}
            onInput={this.onInput} />
          <a
            className={cx(
              "rule-arg-array__plus",
              { disabled: plusDisabled }
            )}
            href="javascript:void(0)"
            onClick={this.onPlus}>
            <i className="fa fa-plus"></i>
          </a>
        </div>
        <ul className="rule-arg-array__list">
          {values.map((v) => (
            <li>{v}</li>
          ))}
        </ul>
      </div>
    );
  }

  onInput(e) {
    let {value} = e.target;
    let plusDisabled = true;

    if (value && this.state.values.indexOf(value) === -1) {
      plusDisabled =  false;
    }

    this.setState({ value, plusDisabled });
  }

  onPlus(e) {
    if (this.state.plusDisabled) return;
    let input = findDOMNode(this.refs.input);
    let {values} = this.state;

    values.push(input.value);
    this.setState({ values });
    this.props.onChange(values);

    input.value = "";
  }
}
