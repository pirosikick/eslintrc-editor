'use strict';
import {Component, PropTypes} from "react";
import Rule from './Rule.jsx';
import clone from 'lodash/lang/clone';
import isNull from 'lodash/lang/isNull';
import isUndefined from 'lodash/lang/isUndefined';
import noop from 'lodash/utility/noop';


class Rules extends Component {
  static propTypes = {
    schema: PropTypes.array.isRequired,
    rules: PropTypes.object,
    onChange: PropTypes.func,
    onClickHelp: PropTypes.func
  };
  static defaultProps = {
    rules: {},
    onChange: noop,
    onClickHelp: noop
  }

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onClickHelp = this.props.onClickHelp.bind(this);
  }

  render() {
    let {schema, rules} = this.props;
    let items = schema.map(schema =>
      <Rule
        name={schema.name}
        schema={schema.schema}
        arg={rules[schema.name]}
        onChange={this.onChange}
        onClickHelp={this.onClickHelp} />
    );

    return <List items={items}/>;
  }

  onChange(e) {
    let {name, arg} = e;
    let rules = clone(this.props.rules);
    if (isNull(arg) || isUndefined(arg)) {
      delete rules[name];
    } else {
      rules[name] = arg;
    }
    this.props.onChange(rules);
  }
}

class List extends Component {
  render() {
    let {items} = this.props;
    let lists = items.map(item =>
      <li className="rule-list__item">{item}</li>
    );

    return (
      <ul className="rule-list">
        <li className="rule-list__item rule-list__header">
          <ul className="rule-status">
            <li className="rule-status__item">
              <span className="rule-status__label">N(0)</span>
            </li>
            <li className="rule-status__item">
            <span className="rule-status__label">W(1)</span>
            </li>
            <li className="rule-status__item">
              <span className="rule-status__label">E(2)</span>
            </li>
          </ul>
        </li>
        {lists}
      </ul>
    );
  }
}

export default Rules;
