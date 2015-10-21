'use strict';
import map from 'lodash/collection/map';
import clone from 'lodash/lang/clone';
import noop from 'lodash/utility/noop';
import uniqueid from 'uniqueid';
import {Component, PropTypes} from "react";
import RadioSet from './RadioSet.jsx';
import actions from '../actions/globals';

export default
  class Globals extends Component {
    static propTypes = {
      value: PropTypes.object,
      onAction: PropTypes.func.isRequired
    };
    static defaultProps = { value: {} };

    constructor(props) {
      super(props);
      this.id = 'globals';
      this.onAdd = this.onAdd.bind(this);
      this.onRemove = this.onRemove.bind(this);
      this.onChange = this.onChange.bind(this);
    }

    render () {
      let {value} = this.props;
      let rows = map(value, (v, name) =>
        <TableRow
          key={`${this.id}-row-${name}`}
          name={name}
          value={v}
          onRemove={this.onRemove}
          onChange={this.onChange} />
      );

      return (
        <div className="globals">
          <InputForm
            globals={value}
            onAdd={(name) => this.onChange(name, true)} />
          <Table>{rows}</Table>
        </div>
      );
    }

    onAdd(name) {
      this.emitAction(actions.add(name));
    }

    onRemove(name) {
      this.emitAction(actions.remove(name));
    }

    onChange(name, value) {
      this.emitAction(actions.change(name, value));
    }

    emitAction(action) {
      this.props.onAction(action);
    }
  }

class InputForm extends Component {
  static propTypes = {
    globals: PropTypes.object,
    onAdd: PropTypes.func
  };
  static defaultProps = { globals:{}, onAdd: noop };

  constructor(props) {
    super(props);
    this.state = { isPlusButtonDisabled: true };
  }

  render() {
    return (
      <div className="globals__form pure-form">
        <input ref="input" type="text" onInput={this.onInput.bind(this)}/>
        <button
          className="globals__plus pure-button"
          disabled={this.state.isPlusButtonDisabled}
          onClick={this.onClickAddButton.bind(this)}>
          <i className="fa fa-plus"></i>
        </button>
      </div>
    );
  }

  onClickAddButton() {
    this.props.onAdd(this.getValue());
    this.clear();
  }

  onInput(e) {
    let {value} = e.target;
    let isPlusButtonDisabled = this.isPlusButtonDisabled(value);

    this.setState({ isPlusButtonDisabled });
  }

  getValue() {
    return this.refs.input.value;
  }

  clear() {
    this.refs.input.value = "";
  }

  isPlusButtonDisabled(value) {
    return value.length === 0 || this.exists(value);
  }

  exists(name) {
    return typeof this.props.globals[name] !== 'undefined';
  }
}

class Table extends Component {
  render() {
    return (
      <table className="global-list">
        <thead className="global-list__head">
          <tr>
            <th className="global-list__var-name-col">name</th>
            <th className="global-list__value-col">value</th>
          </tr>
        </thead>
        <tbody>
          {this.props.children}
        </tbody>
      </table>
    )
  }
}

const radioSetOptions = [
  { label: "true", value: true },
  { label: "false", value: false }
];

class TableRow extends Component {
  render() {
    let {name, value} = this.props;

    return (
      <tr key={`globals-${name}`}>
        <td>
          <a onClick={this.onRemove.bind(this)}
             href="javascript:void(0)"
             className="global-list__remove">
            <i className="fa fa-times"></i>
          </a>
          <span className="global-list__var-name">{name}</span>
        </td>
        <td>
          <RadioSet
            name={name}
            horizontal={true}
            options={radioSetOptions}
            defaultValue={value}
            onChange={this.onChange.bind(this)}
          />
        </td>
      </tr>
    );
  }

  onRemove() {
    this.props.onRemove(this.props.name);
  }

  onChange({name, value}) {
    this.props.onChange(name, value);
  }
}
