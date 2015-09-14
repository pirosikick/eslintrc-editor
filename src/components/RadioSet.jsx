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

      this.radioName = uniqueid({ prefix: 'radio-set' });
    }

    onChange (e) {
      this.props.onChange({ name: this.props.name, value: e.target.value });
    }

    render () {
      let {options, defaultValue, horizontal} = this.props;
      let className = cx("radioset", { "radioset--is-horizontal": horizontal });

      return (
        <ul className={className}>
          {
            options.map(({value, label}, i) => (
              <li key={`radioset-${name}-${i}`} className="radioset__item">
                <Radio
                  name={this.radioName}
                  value={value}
                  label={label}
                  defaultChecked={value === defaultValue}
                  onChange={this.onChange.bind(this)} />
              </li>
            ))
          }
        </ul>
      );
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
          value={value}
          defaultChecked={defaultChecked}
          onChange={onChange} />
        <span className="radioset__label-text">{label}</span>
      </label>
    );
  }

}
