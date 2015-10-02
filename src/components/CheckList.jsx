import {Component,  findDOMNode, PropTypes} from "react";
import uniqueid from 'uniqueid';
import toArray from 'lodash/lang/toArray';
import clone from 'lodash/lang/clone';
import remove from 'lodash/array/remove';

const NOOP = function () {};

export default
  class CheckList extends Component {
    static defaultProps = {
      defaultChecked: []
    }

    constructor (props) {
      super(props)

      this.idPrefix = uniqueid({ prefix: 'checklist' });
      this.onChange = this.onChange.bind(this);
      this.toggleAll = this.toggleAll.bind(this);
    }

    render () {
      let {name, keys, defaultChecked} = this.props;
      let idPrefix = this.idPrefix;

      let rows = keys.map(key =>
        <TableRow
          key={`${idPrefix}-${key}`}
          value={key}
          onChange={this.onChange}
          checked={defaultChecked.indexOf(key) !== -1}/>
      );

      return (
        <table className="checklist-table">
          <thead className="checklist-table__header">
            <tr>
              <th>
                <label>
                  <input
                    type="checkbox"
                    className="checkbox__input"
                    onChange={this.toggleAll}/>
                  <span className="checkbox__label">toggle all</span>
                </label>
              </th>
            </tr>
          </thead>
          <tbody ref="tbody">{rows}</tbody>
        </table>
      );
    }

    shouldComponentUpdate(nextProps) {
      return this.props.defaultChecked !== nextProps.defaultChecked;
    }

    toggleAll (e) {
      let {checked} = e.target;
      this.props.onChange(checked ? this.props.keys : []);
    }

    onChange(e) {
      let {keys, defaultChecked} = this.props;
      let newChecked = clone(defaultChecked);
      let {value, checked} = e;

      if (checked) {
        newChecked.push(value);
      } else {
        remove(newChecked, v => v === value);
      }

      newChecked.sort((a, b) =>
        keys.indexOf(a) - keys.indexOf(b)
      );

      this.props.onChange(newChecked);
    }
  }

class TableRow extends Component {
  static propTypes = {
    key: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    defaultChecked: PropTypes.bool
  };
  static defaultProps = {
    key: "",
    value: "",
    onChange: NOOP,
    defaultChecked: false
  };

  render() {
    let {key, value, onChange, checked} = this.props;

    return (
      <tr key={key}>
        <td>
          <label>
            <input
              type="checkbox"
              value={value}
              checked={checked}
              className="checkbox__input"
              onChange={this.onChange.bind(this)}/>
            <span className="checkbox__label">{value}</span>
          </label>
        </td>
      </tr>
    );
  }

  onChange(e) {
    let {checked} = e.target;
    this.props.onChange({ value: this.props.value, checked });
  }
}

