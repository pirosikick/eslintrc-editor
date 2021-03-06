import React, { Component } from 'react';
import cx from 'classnames';
import noop from 'lodash/utility/noop';
import clone from 'lodash/lang/clone';
import Argument from './RuleArgument';

class Arguments extends Component {
  constructor(props) {
    super(props);
    this.emitChange = this.emitChange.bind(this);
  }

  emitChange(e) {
    const values = clone(this.props.values);
    values[e.index] = e.value;
    this.props.onChange({ values });
  }

  render() {
    const { ruleName, schema, values, disabled } = this.props;

    if (!schema.length) {
      return null;
    }

    const getProps = (def, index) => ({
      ruleName,
      index,
      def,
      disabled,
      value: values[index],
      onChange: this.emitChange,
    });
    const getArgument = props => <Argument {...props} />;
    const children = schema.map(getProps).map(getArgument);

    const className = cx(
      'rule__body rule-args',
      disabled && 'rule__body--is-disabled'
    );

    const getKey = index => `rule-arg-list__item.${ruleName}.${index}`;
    return (
      <article className={className}>
        <header className="rule-arg__header">
          <h5 className="rule-arg__title">{ruleName} arguments</h5>
        </header>
        <ul className="rule-arg-list">{children.map((child, i) =>
          <li key={getKey(i)} className="rule-arg-list__item">{child}</li>
        )}</ul>
      </article>
    );
  }
}

Arguments.defaultProps = { onChange: noop };

export default Arguments;
