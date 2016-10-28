import React, { Component, PropTypes } from 'react';
import Rule from './Rule';

class Rules extends Component {
  constructor(props) {
    super(props);
    this.id = 'rules';
  }

  render() {
    const { schema, value } = this.props;
    const items = schema.map(s =>
      <Rule
        key={`${this.id}-${s.name}`}
        name={s.name}
        schema={s.schema}
        value={value[s.name]}
        onAction={this.props.onAction}
      />
    );

    return <List items={items} />;
  }
}

Rules.propTypes = {
  schema: PropTypes.array.isRequired, // eslint-disable-line
  value: PropTypes.object, // eslint-disable-line
  onAction: PropTypes.func,
};
Rules.defaultProps = { rules: {} };


class List extends Component {
  render() {
    const { items } = this.props;
    const lists = items.map((item, i) =>
      <li key={`rule-list-item-${i}`} className="rule-list__item">{item}</li>
    );

    return (
      <ul className="rule-list">
        {lists}
      </ul>
    );
  }
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.element),
};

export default Rules;
