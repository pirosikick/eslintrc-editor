import React, {Component, findDOMNode} from "react";
import {isArray, isObject, each} from 'lodash';
import uniqueid from 'uniqueid';
import cx from 'classnames';

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
              onChange={this.onChange}
              />
          </div>
        </div>
      );
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
      return <RuleArgumentEnum values={options.enum} disabled={disabled} onChange={this.onChange}/>;
    } else if (options.oneOf) {
      return <RuleArgumentOneOf args={options.oneOf} disabled={disabled} onChange={this.onChange}/>
    }

    if (isObject(options)) {
      switch (options.type) {
      case 'object':
        return <RuleArgumentObject properties={options.properties} disabled={disabled} onChange={this.onChange}/>;
      case 'integer':
        return <RuleArgumentInteger disabled={disabled} onChange={this.onChange} />;
      case 'string':
        return <RuleArgumentString disabled={disabled} onChange={this.onChange} />;
      case 'bool':
      case 'boolean':
        return <RuleArgumentBool disabled={disabled} onChange={this.onChange} />;
      case 'array':
        return <RuleArgumentArray disabled={disabled} onChange={this.onChange}/>;
      }
    }

    return null;
  }
}

class RuleArgumentInteger extends Component {
  onChange(e) {
    this.props.onChange(e.target.value - 0)
  }

  render() {
    return <input className="rule-arg-integer" type="number" placeholder="integer" disabled={this.props.disabled} onChange={this.onChange.bind(this)}/>;
  }
}

class RuleArgumentBool extends Component {
  onChange(e) {
    this.props.onChange(e.target.checked)
  }

  render() {
    let {name} = this.props;
    return <input className="rule-arg-bool" type="checkbox" disabled={this.props.disabled} onChange={this.onChange.bind(this)}/>;
  }
}

class RuleArgumentString extends Component {
  onChange(e) {
    this.props.onChange(e.target.value)
  }

  render() {
    return <input className="rule-arg-string" type="text" placeholder="string" disabled={this.props.disabled} onChange={this.onChange.bind(this)}/>;
  }
}

class RuleArgumentObject extends Component {
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

class RuleArgumentEnum extends Component {
  onChange(e) {
    this.props.onChange(e.target.value || null);
  }

  render() {
    let {values} = this.props;

    return (
      <select className="rule-arg-options" disabled={this.props.disabled} onChange={this.onChange.bind(this)}>
        <option value="">-</option>
        {values.map(v => <option value={v}>{v}</option>)}
      </select>
    );
  }
}

class RuleArgumentOneOf extends Component {
  constructor(props) {
    super(props);

    this.radioName = uniqueid({ prefix: 'rule-arg-oneof-radio' });
  }

  onClickRadio(e) {
    let index = e.target.getAttribute('data-arg-index')
      , input = this.refs[`input-${index}`];

    this.props.onChange(input.currentValue);
  }

  render() {
    let {args, disabled} = this.props;

    let lists = args.reduce((lists, arg, index) => {
      if (lists.length) {
        lists.push(
          <span className="rule-arg-oneof__or">OR</span>
        );
      }

      lists.push([
        <div className="rule-arg-oneof__radio-column">
          <input
            className="rule-arg-oneof__radio"
            type="radio"
            data-arg-index={index}
            name={this.radioName}
            disabled={disabled}
            onClick={this.onClickRadio.bind(this)} />
        </div>,
        <div className="rule-arg-oneof__input-column">
          <RuleArgumentInput options={arg} ref={`input-${index}`} disabled={disabled} onChange={() => {}}/>
        </div>
      ]);

      return lists;
    }, []);

    return (
      <ul className="rule-arg-oneof">
        {lists.map((list) => (
          <li className="rule-arg-oneof__item">{list}</li>
        ))}
      </ul>
    );
  }
}

class RuleArgumentArray extends Component {
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
