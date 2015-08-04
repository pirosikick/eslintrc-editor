'use strict';
import React, {Component} from "react";
import uniqueid from 'uniqueid';

export default
  class RadioSet extends Component {
    static defaultProps = {
      defaultValue: "",
      horizontal: false,
      onChange: function () {}
    }

    constructor(props) {
      super(props);

      this.idPrefix = uniqueid({ prefix: 'radio-set' });
    }

    onChange (e) {
      let {value} = e.target;
      this.props.onChange(this.props.name, value);
    }

    render () {
      let {name, options, defaultValue, horizontal} = this.props;
      let pre = horizontal ? "radioset-horizontal" : "radioset"
      let radioName = `${this.idPrefix}-${name}`;

      return (
        <ul className={pre} onChange={this.onChange.bind(this)}>{
          options.map((o, i) => (
            <li key={`radioset-${name}-${i}`} className={`${pre}__item`}>
              <label htmlFor={`${this.idPrefix}-${o.value}`}>
                <input
                  className={`${pre}__radio`}
                  id={`${this.idPrefix}-${o.value}`}
                  type="radio"
                  name={radioName}
                  value={o.value}
                  defaultChecked={o.value == defaultValue}/>
                <span className={`${pre}__label-text`}>{o.label}</span>
              </label>
            </li>
          ))
        }</ul>
      );
    }
  }
