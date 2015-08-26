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
      let {ruleName, index, options, onChange} = this.props;

      return (
        <div className="rule-arg">
          <div className="rule-arg__index">
            <span className="rule-arg__index-no">{index}</span>
          </div>
          <div className="rule-arg__input">
            <RuleArgumentInput options={options} onChange={this.onChange} />
          </div>
        </div>
      );
    }
  }

class RuleArgumentInput extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.props.onChange(value);
  }

  render() {
    let {options} = this.props;

    if (options.enum) {
      return <RuleArgumentEnum values={options.enum} onChange={this.onChange}/>;
    } else if (options.oneOf) {
      return <RuleArgumentOneOf args={options.oneOf} />
    }

    if (isObject(options)) {
      switch (options.type) {
      case 'object':
        return <RuleArgumentObject properties={options.properties} onChange={this.onChange}/>;
      case 'integer':
        return <RuleArgumentInteger onChange={this.onChange} />;
      case 'string':
        return <RuleArgumentString onChange={this.onChange} />;
      case 'bool':
      case 'boolean':
        return <RuleArgumentBool onChange={this.onChange} />;
      case 'array':
        return <RuleArgumentArray onChange={this.onChange}/>;
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
    return <input className="rule-arg-integer" type="number" placeholder="integer" onChange={this.onChange.bind(this)}/>;
  }
}

class RuleArgumentBool extends Component {
  onChange(e) {
    this.props.onChange(e.target.checked)
  }

  render() {
    let {name} = this.props;
    return <input className="rule-arg-bool" type="checkbox" onChange={this.onChange.bind(this)}/>;
  }
}

class RuleArgumentString extends Component {
  onChange(e) {
    this.props.onChange(e.target.value)
  }

  render() {
    return <input className="rule-arg-string" type="text" placeholder="string" onChange={this.onChange.bind(this)}/>;
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
    let {properties} = this.props;

    let lines = [];
    each(properties, (options, key) => {
      let onChange = this.onChange.bind(this, key);

      lines.push(
        <tr>
          <td className="rule-arg-object__name-column">
            <span className="rule-arg-object__name">{key}</span>
          </td>
          <td className="rule-arg-object__input-column">
            <RuleArgumentInput options={options} onChange={onChange}/>
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
    this.props.onChange(e.target.value);
  }

  render() {
    let {values} = this.props;

    return (
      <select className="rule-arg-options" onChange={this.onChange.bind(this)}>
        {values.map(v => <option value={v}>{v}</option>)}
      </select>
    );
  }
}

class RuleArgumentOneOf extends Component {
  render() {
    let {args} = this.props;

    let name = uniqueid({ prefix: 'rule-arg-oneof-radio' })
    let lists = args.reduce((lists, arg) => {
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
            name={name}/>
        </div>,
        <div className="rule-arg-oneof__input-column">
          <RuleArgumentInput options={arg} />
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
