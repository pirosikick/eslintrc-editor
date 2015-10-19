'use strict';
import {Component, PropTypes} from "react";
import Rule from './Rule.jsx';
import clone from 'lodash/lang/clone';
import isNull from 'lodash/lang/isNull';
import isArray from 'lodash/lang/isArray';
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
        value={rules[schema.name]}
        onChange={this.onChange}
        onClickHelp={this.onClickHelp} />
    );

    return <List items={items}/>;
  }

  onChange(e) {
    let {name, value} = e;
    let rules = clone(this.props.rules);

    if (isArray(value)) {
      rules[name] = value;
    } else {
      delete rules[name];
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
        {lists}
      </ul>
    );
  }
}

export default Rules;
