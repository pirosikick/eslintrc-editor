import React, {Component} from "react";
import {isArray, isObject, each} from 'lodash';
import uniqueid from 'uniqueid';

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
      }
    }

    return null;
  }
}

class RuleArgumentInteger extends Component {
  render() {
    return <input {...this.props} type="number"/>;
  }
}

class RuleArgumentObject extends Component {
  render() {
    let {properties} = this.props;

    let lists = [];
    each(properties, (v, k) => {
      lists.push(
        <li className="rule-arg-object__item">
          <RuleArgumentBool name={k}/>
        </li>
      );
    });

    return <ul className="rule-arg-object">{lists}</ul>;
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
        <input
          className="rule-arg-oneof__radio"
          type="radio"
          name={name}/>,
        <RuleArgumentInput options={arg} />
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

class RuleArgumentBool extends Component {
  render() {
    let {name} = this.props;
    let id = uniqueid({ prefix: 'rule-arg-bool' });

    return (
      <label className="rule-arg-bool" htmlFor={id}>
        <input
          className="rule-arg-bool__checkbox"
          id={id}
          type="checkbox"
          name=""/>
        <span>{name}</span>
      </label>
    );
  }
}

class RuleArgumentString extends Component {
  render() {
    return <input type="text" name="" placeholder="string" />;
  }
}
