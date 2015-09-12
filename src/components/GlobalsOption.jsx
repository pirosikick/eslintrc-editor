'use strict';
import {map, clone, isUndefined} from 'lodash';
import React, {Component, findDOMNode} from "react";
import RadioSet from './RadioSet.jsx';

export default
  class GlobalsOption extends Component {
    constructor (props) {
      super(props);
      this.state = { isPlusButtonDisabled: true };
    }

    onInput (e) {
      let {value} = e.target;
      let disabled = !value.length
        || !isUndefined(this.props.globals[value]);

      this.setState({ isPlusButtonDisabled: disabled });
    }

    onChange(name, value = true) {
      this.props.onChange(name, !!parseInt(value))
    }

    onAdd(e) {
      let input = findDOMNode(this.refs.globalName);
      let name = input.value;

      input.value = '';
      this.props.onChange(name, true)
    }

    onRemove(e) {
      let name = e.currentTarget.getAttribute('data-global-name');
      this.props.onRemove(name)
    }

    render () {
      let {globals} = this.props;
      let {isPlusButtonDisabled} = this.state;

      let radioSetOptions = [
        { label: "true", value: "1" },
        { label: "false", value: "0" }
      ];

      return (
        <div className="globals-option">
          <div className="globals-option__form pure-form">
            <input ref="globalName" type="text" onInput={this.onInput.bind(this)}/>
            <button
              className="globals-option__plus pure-button"
              disabled={isPlusButtonDisabled}
              onClick={this.onAdd.bind(this)}>
              <i className="fa fa-plus"></i>
            </button>
          </div>

          <table className="global-list">
            <thead className="global-list__head">
              <tr>
                <th className="global-list__remove-col"></th>
                <th className="global-list__var-name-col">name</th>
                <th className="global-list__value-col">value</th>
              </tr>
            </thead>
            <tbody>{map(globals, (value, name) => (
              <tr key={`globals-${name}`}>
                <td>
                  <a onClick={this.onRemove.bind(this)}
                     href="javascript:void(0)"
                     data-global-name={name}
                     className="global-list__remove">
                    <i className="fa fa-times"></i>
                  </a>
                </td>
                <td>
                  <span className="global-list__var-name">{name}</span>
                </td>
                <td>
                  <RadioSet
                    name={name}
                    horizontal={true}
                    options={radioSetOptions}
                    defaultValue={value - 0}
                    onChange={this.onChange.bind(this)}
                  />
                </td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      );
    }
  }



