'use strict';
import React, {Component} from "react";

export default
  class RadioSet extends Component {
    static defaultProps = {
      defaultValue: "",
      horizontal: false
    }

    render () {
      let {name, options, defaultValue, horizontal} = this.props;
      let pre = horizontal ? "radioset-horizontal" : "radioset"

      return (
        <ul className={pre}>{
          options.map((o, i) => (
            <li key={`radioset-${name}-${i}`} className={`${pre}__item`}>
              <label htmlFor={`${name}-${o.value}`}>
                <input
                  className={`${pre}__radio`}
                  id={`${name}-${o.value}`}
                  type="radio"
                  name={name}
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
