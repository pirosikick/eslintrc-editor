/* eslint-disable jsx-a11y/label-has-for */
import React, { Component, PropTypes } from 'react';
import uniqueid from 'uniqueid';
import clone from 'lodash/lang/clone';
import difference from 'lodash/array/difference';
import noop from 'lodash/utility/noop';
import _keys from 'lodash/object/keys';

export default
  class CheckList extends Component {
    constructor(props) {
      super(props);

      this.idPrefix = uniqueid({ prefix: 'checklist' });
      this.onChange = this.onChange.bind(this);
      this.toggleAll = this.toggleAll.bind(this);
    }

    shouldComponentUpdate(nextProps) {
      return this.props.defaultChecked !== nextProps.defaultChecked;
    }

    onChange(e) {
      const { keys, defaultChecked } = this.props;
      const newChecked = clone(defaultChecked);
      const { value, checked } = e;

      if (checked) {
        newChecked[value] = true;
      } else {
        delete newChecked[value];
      }

      const sorted = {};
      keys.forEach(key => {
        if (newChecked[key]) {
          sorted[key] = true;
        }
      });

      this.props.onChange(sorted);
    }

    isToggleAllChecked() {
      const { keys, defaultChecked } = this.props;
      return difference(keys, _keys(defaultChecked)).length === 0;
    }

    toggleAll(e) {
      const { keys } = this.props;
      const { checked } = e.target;
      if (checked) {
        const all = {};
        keys.forEach(key => { all[key] = true; });
        this.props.onChange(all);
      } else {
        this.props.onChange({});
      }
    }

    render() {
      const { keys, defaultChecked } = this.props;
      const idPrefix = this.idPrefix;

      const rows = keys.map(key =>
        <TableRow
          key={`${idPrefix}-${key}`}
          value={key}
          onChange={this.onChange}
          checked={defaultChecked[key]}
        />
      );

      return (
        <table className="checklist-table">
          <thead className="checklist-table__header">
            <tr>
              <th>
                <label>
                  <input
                    type="checkbox"
                    checked={this.isToggleAllChecked()}
                    className="checkbox__input"
                    onChange={this.toggleAll}
                  />
                  <span className="checkbox__label">toggle all</span>
                </label>
              </th>
            </tr>
          </thead>
          <tbody ref="tbody">{rows}</tbody>
        </table>
      );
    }
  }

CheckList.defaultProps = {
  defaultChecked: {},
};


class TableRow extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const { checked } = e.target;
    this.props.onChange({ value: this.props.value, checked });
  }

  render() {
    const { key, value, checked } = this.props;

    return (
      <tr key={key}>
        <td>
          <label>
            <input
              type="checkbox"
              value={value}
              checked={checked}
              className="checkbox__input"
              onChange={this.onChange}
            />
            <span className="checkbox__label">{value}</span>
          </label>
        </td>
      </tr>
    );
  }
}

TableRow.propTypes = {
  key: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
TableRow.defaultProps = {
  key: '',
  value: '',
  onChange: noop,
};
