/* eslint-disable react/no-multi-comp */
import React, { Component, PropTypes } from 'react';
import uniqueid from 'uniqueid';
import cx from 'classnames';

const propTypes = {
  name: PropTypes.string,
  options: PropTypes.array,
  defaultValue: PropTypes.string,
  horizontal: PropTypes.bool,
  onChange: PropTypes.func,
};
const defaultProps = {
  defaultValue: '',
  horizontal: false,
  onChange() {},
};

export default
  class RadioSet extends Component {
    constructor(props) {
      super(props);
      this.id = uniqueid({ prefix: 'radio-set' });
      this.onChange = this.onChange.bind(this);
    }

    onChange(value) {
      this.props.onChange({ name: this.props.name, value });
    }

    render() {
      const { options, defaultValue, horizontal } = this.props;
      const items = options.map(({ value, label }) =>
        <Radio
          key={`${this.id}-${value}`}
          name={this.id}
          value={value}
          label={label}
          defaultChecked={value === defaultValue}
          onChange={this.onChange}
        />
      );

      return <List horizontal={horizontal} items={items} />;
    }
  }

RadioSet.propTypes = propTypes;
RadioSet.defaultProps = defaultProps;

class List extends Component {
  wrapListItem(children, index) {
    const { name } = this.props;
    return <ListItem key={`radioset-${name}-${index}`}>{children}</ListItem>;
  }

  render() {
    const { horizontal, items } = this.props;
    const className = cx('radioset', { 'radioset--is-horizontal': horizontal });
    const lists = items.map(this.wrapListItem, this);

    return <ul className={className}>{lists}</ul>;
  }
}

class ListItem extends Component {
  render() {
    return <li className="radioset__item">{this.props.children}</li>;
  }
}

class Radio extends Component {
  render() {
    const { name, value, label, defaultChecked, onChange } = this.props;

    return (
      // eslint-disable-next-line
      <label>
        <input
          className="radioset__radio"
          type="radio"
          name={name}
          defaultChecked={defaultChecked}
          onChange={() => onChange(value)}
        />
        <span className="radioset__label-text">{label}</span>
      </label>
    );
  }
}
