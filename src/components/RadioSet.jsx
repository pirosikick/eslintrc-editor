'use strict';
import React, {Component} from "react";
import uniqueid from 'uniqueid';
import cx from 'classnames';

export default
  class RadioSet extends Component {
    static defaultProps = {
      defaultValue: "",
      horizontal: false,
      onChange: function () {}
    };

    constructor(props) {
      super(props);
      this.id = uniqueid({ prefix: 'radio-set' });
      this.onChange = this.onChange.bind(this);
    }

    onChange (value) {
      this.props.onChange({ name: this.props.name, value });
    }

    render () {
      let {options, defaultValue, horizontal} = this.props;
      let className = cx("radioset", {
        "radioset--is-horizontal": horizontal
      });
      let items = options.map(({value, label}) =>
        <Radio
          key={`${this.id}-${value}`}
          name={this.id}
          value={value}
          label={label}
          defaultChecked={value === defaultValue}
          onChange={this.onChange} />
      );

      return <List horizontal={horizontal} items={items} />;
    }
  }

class List extends Component {
  render() {
    let {name, horizontal, items} = this.props;
    let className = cx("radioset", { "radioset--is-horizontal": horizontal });
    let lists = items.map(this.wrapListItem, this);

    return <ul className={className}>{lists}</ul>;
  }

  wrapListItem(children, index) {
    let {name} = this.props;
    return <ListItem key ={`radioset-${name}-${index}`}>{children}</ListItem>;
  }
}

class ListItem extends Component {
  render() {
    return <li className="radioset__item">{this.props.children}</li>;
  }
}

class Radio extends Component {
  render() {
    let {name, value, label, defaultChecked, onChange} = this.props;

    return (
      <label>
        <input
          className="radioset__radio"
          type="radio"
          name={name}
          defaultChecked={defaultChecked}
          onChange={() => onChange(value)} />
        <span className="radioset__label-text">{label}</span>
      </label>
    );
  }

}
