import React, {Component,  findDOMNode} from "react";
import uniqueid from 'uniqueid';
import {reduce, toArray} from 'lodash';

export default
  class CheckList extends Component {
    static defaultProps = {
      defaultChecked: []
    }

    constructor (props) {
      super(props)

      this.idPrefix = uniqueid({ prefix: 'checklist' });
    }

    toggleAll (e) {
      let {checked} = e.target;

      this.getCheckboxes().forEach((checkbox) => checkbox.checked = checked);

      setTimeout(() => {
        this.props.onChange(checked ? this.props.keys : []);
      });
    }

    onChange(e) {
      setTimeout(() => {
        this.props.onChange(this.getAllChecked());
      });
    }

    getAllChecked() {
      return this.getCheckboxes(true).map((cb) => cb.value);
    }

    getCheckboxes(checked = false) {
      let selector = `input[type=checkbox]${checked ? ':checked' : ''}`;
      let tbody = findDOMNode(this.refs.tbody);
      let checkboxes = tbody.querySelectorAll(selector);

      return toArray(checkboxes);
    }

    render () {
      let {name, keys, defaultChecked} = this.props;
      let idPrefix = this.idPrefix;

      return (
        <table className="checklist-table">
          <thead className="checklist-table__header">
            <tr>
              <th>
                <label htmlFor={`${idPrefix}-toggle-all`}>
                  <input
                    id={`${idPrefix}-toggle-all`}
                    type="checkbox"
                    className="checkbox__input"
                    onChange={this.toggleAll.bind(this)}/>
                  <span className="checkbox__label">name</span>
                </label>
              </th>
            </tr>
          </thead>
          <tbody ref="tbody">{
            keys.map((key) => (
              <tr key={`${idPrefix}-${key}`}>
                <td>
                  <label htmlFor={`${idPrefix}-${name}-${key}`}>
                    <input
                      id={`${idPrefix}-${name}-${key}`}
                      type="checkbox"
                      name={name}
                      value={key}
                      defaultChecked={
                        defaultChecked.indexOf(key) >= 0
                      }
                      className="checkbox__input"
                      onChange={this.onChange.bind(this)}/>
                    <span className="checkbox__label">{key}</span>
                  </label>
                </td>
              </tr>
            ))
           }</tbody>
        </table>
      );
    }
  }



