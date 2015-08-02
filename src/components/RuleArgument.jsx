import React, {Component, findDOMNode} from "react";
import {isArray, isObject, each} from 'lodash';
import uniqueid from 'uniqueid';
import cx from 'classnames';

export default
  class RuleArgument extends Component {
    render() {
      let {ruleName, index, options} = this.props;

      return (
        <div className="rule-arg">
          <div className="rule-arg__index">
            <span className="rule-arg__index-no">{index + 1}</span>
          </div>
          <div className="rule-arg__input">
            <RuleArgumentInput options={options} />
          </div>
        </div>
      );
    }
  }

class RuleArgumentInput extends Component {
  render() {
    let {options} = this.props;

    if (options.enum) {
      return <RuleArgumentEnum values={options.enum}/>;
    } else if (options.oneOf) {
      return <RuleArgumentOneOf args={options.oneOf} />
    }

    if (isObject(options)) {
      switch (options.type) {
      case 'object':
        return <RuleArgumentObject properties={options.properties}/>;
      case 'integer':
        return <RuleArgumentInteger />;
      case 'string':
        return <RuleArgumentString />;
      case 'bool':
      case 'boolean':
        return <RuleArgumentBool />;
      case 'array':
        return <RuleArgumentArray />;
      }
    }

    return null;
  }
}

class RuleArgumentInteger extends Component {
  render() {
    return <input className="rule-arg-integer" type="number" placeholder="integer"/>;
  }
}

class RuleArgumentBool extends Component {
  render() {
    let {name} = this.props;
    return <input className="rule-arg-bool" type="checkbox"/>;
  }
}

class RuleArgumentString extends Component {
  render() {
    return <input className="rule-arg-string" type="text" name="" placeholder="string" />;
  }
}
class RuleArgumentObject extends Component {
  render() {
    let {properties} = this.props;

    let lines = [];
    each(properties, (options, key) => {
      lines.push(
        <tr>
          <td className="rule-arg-object__name-column">
            <span className="rule-arg-object__name">{key}</span>
          </td>
          <td className="rule-arg-object__input-column">
            <RuleArgumentInput options={options}/>
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
  render() {
    let {values} = this.props;

    return (
      <select className="rule-arg-options">
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

    this.state = { plusDisabled: true };
  }

  render() {
    let {values} = this.props;
    let {plusDisabled} = this.state;

    return (
      <div className="rule-arg-array">
        <div className="rule-arg-array__input">
          <input
            ref="input"
            className="rule-arg-array__string"
            type="text"
            placeholder="string"
            onInput={this.onInput.bind(this)} />
          <a
            className={cx(
              "rule-arg-array__plus",
              { disabled: plusDisabled }
            )}
            href="javascript:void(0)"
            onClick={this.onPlus.bind(this)}>
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

    if (value && this.props.values.indexOf(value) === -1) {
      this.setState({ plusDisabled: false });
    } else {
      this.setState({ plusDisabled: true });
    }
  }

  onPlus(e) {
    if (this.state.plusDisabled) return;

    let input = findDOMNode(this.refs.input);
    console.log(input.value);
    input.value = "";
  }
}
