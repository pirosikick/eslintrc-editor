'use strict';
import React, {Component} from "react";

export default
  class CheckList extends Component {
    static defaultProps = {
      defaultChecked: []
    }

    constructor (props) {
      super(props)
    }

    toggleAll (e) {
    }

    onChange (e) {
    }

    render () {
      let {name, keys, defaultChecked, id} = this.props;

      return (
        <table className="checklist-table">
          <thead className="checklist-table__header">
            <tr>
              <th>
                <label htmlFor={`${id}-toggle-all`}>
                  <input
                    id={`${id}-toggle-all`}
                    type="checkbox"
                    className="checkbox__input"/>
                  <span className="checkbox__label">name</span>
                </label>
              </th>
            </tr>
          </thead>
          <tbody>{
            keys.map((key) => (
              <tr key={`${id}-${key}`}>
                <td>
                  <label htmlFor={`${id}-checkbox-${name}`}>
                    <input
                      id={`${id}-checkbox-${name}`}
                      type="checkbox"
                      name={name}
                      value={key}
                      defaultChecked={defaultChecked.indexOf(key) > 0}
                      className="checkbox__input" />
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



