/* eslint-disable no-script-url */
import React, { Component, PropTypes } from 'react';
import map from 'lodash/collection/map';
import noop from 'lodash/utility/noop';
import RadioSet from './RadioSet';
import * as actions from '../actions/globals';

export default
  class Globals extends Component {
    constructor(props) {
      super(props);
      this.id = 'globals';
      this.onAdd = this.onAdd.bind(this);
      this.onRemove = this.onRemove.bind(this);
      this.onChange = this.onChange.bind(this);
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

    render() {
      const { value } = this.props;
      const rows = map(value, (v, name) =>
        <TableRow
          key={`${this.id}-row-${name}`}
          name={name}
          value={v}
          onRemove={this.onRemove}
          onChange={this.onChange}
        />
      );

      return (
        <div className="globals">
          <InputForm
            globals={value}
            onAdd={name => this.onChange(name, true)}
          />
          <Table>{rows}</Table>
        </div>
      );
    }
  }

Globals.propTypes = {
  value: PropTypes.objectOf(PropTypes.bool),
  onAction: PropTypes.func.isRequired,
};
Globals.defaultProps = { value: {} };

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = { isPlusButtonDisabled: true };
    this.onInput = this.onInput.bind(this);
    this.onClickAddButton = this.onClickAddButton.bind(this);
  }

  onClickAddButton() {
    this.props.onAdd(this.getValue());
    this.clear();
  }

  onInput(e) {
    const { value } = e.target;
    const isPlusButtonDisabled = this.isPlusButtonDisabled(value);

    this.setState({ isPlusButtonDisabled });
  }

  getValue() {
    return this.refs.input.value;
  }

  clear() {
    this.refs.input.value = '';
  }

  isPlusButtonDisabled(value) {
    return value.length === 0 || this.exists(value);
  }

  exists(name) {
    return typeof this.props.globals[name] !== 'undefined';
  }

  render() {
    return (
      <div className="globals__form pure-form">
        <input ref="input" type="text" onInput={this.onInput} />
        <button
          className="globals__plus pure-button"
          disabled={this.state.isPlusButtonDisabled}
          onClick={this.onClickAddButton}
        >
          <i className="fa fa-plus" />
        </button>
      </div>
    );
  }
}

InputForm.propTypes = {
  globals: PropTypes.objectOf(PropTypes.bool),
  onAdd: PropTypes.func,
};
InputForm.defaultProps = { globals: {}, onAdd: noop };


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
    );
  }
}

const radioSetOptions = [
  { label: 'true', value: true },
  { label: 'false', value: false },
];

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.onRemove = this.onRemove.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onRemove() {
    this.props.onRemove(this.props.name);
  }

  onChange({ name, value }) {
    this.props.onChange(name, value);
  }

  render() {
    const { name, value } = this.props;

    return (
      <tr key={`globals-${name}`}>
        <td>
          <a
            onClick={this.onRemove}
            href="javascript:void(0)"
            className="global-list__remove"
          >
            <i className="fa fa-times" />
          </a>
          <span className="global-list__var-name">{name}</span>
        </td>
        <td>
          <RadioSet
            name={name}
            horizontal
            options={radioSetOptions}
            defaultValue={value}
            onChange={this.onChange}
          />
        </td>
      </tr>
    );
  }
}
