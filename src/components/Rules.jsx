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
    value: PropTypes.object,
    onAction: PropTypes.func
  };
  static defaultProps = { rules: {} }

  constructor(props) {
    super(props);
    this.id = 'rules';
  }

  render() {
    let {schema, value} = this.props;
    let items = schema.map(schema =>
      <Rule
        key={`${this.id}-${schema.name}`}
        name={schema.name}
        schema={schema.schema}
        value={value[schema.name]}
        onAction={this.props.onAction} />
    );

    return <List items={items}/>;
  }
}

class List extends Component {
  render() {
    let {items} = this.props;
    let lists = items.map((item, i) =>
      <li key={`rule-list-item-${i}`} className="rule-list__item">{item}</li>
    );

    return (
      <ul className="rule-list">
        {lists}
      </ul>
    );
  }
}

export default Rules;
