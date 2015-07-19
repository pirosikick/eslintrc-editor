'use strict';
import React, {Component} from "react";
import RadioSet from './RadioSet.jsx';

export default
  class GlobalsOption extends Component {
    static defaultProps = {
      globals: []
    };

    constructor (props) {
      super(props);
      this.state = { isPlusButtonDisabled: true };
    }

    onInput (e) {
      let disabled = !e.target.value.length;
      this.setState({ isPlusButtonDisabled: disabled });
    }

    onRemove(e) {
    }

    render () {
      let {globals} = this.props;
      let {isPlusButtonDisabled} = this.state;

      return (
        <div className="globals-option">
          <div className="globals-option__form pure-form">
            <input type="text" onInput={this.onInput.bind(this)}/>
            <button
              className="globals-option__plus pure-button"
              disabled={isPlusButtonDisabled}>
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
            <tbody>{globals.map((g, index) => (
              <tr key={`global-${g.name}-${index}`}>
                <td>
                  <a href="javascript:void(0)" className="global-list__remove">
                    <i className="fa fa-times"></i>
                  </a>
                </td>
                <td>
                  <span className="global-list__var-name">{g.name}</span>
                </td>
                <td>
                  <RadioSet
                    name={`global-value-${g.name}`}
                    horizontal={true}
                    options={[
                      { label: "true", value: "1" },
                      { label: "false", value: "0" }
                    ]}
                    defaultValue={g.value - 0}
                  />
                </td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      );
    }
  }



