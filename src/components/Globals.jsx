'use strict';
import map from 'lodash/collection/map';
import clone from 'lodash/lang/clone';
import noop from 'lodash/utility/noop';
import {Component, PropTypes} from "react";
import RadioSet from './RadioSet.jsx';

export default
  class Globals extends Component {
    static propTypes = {
      defaultValue: PropTypes.object,
      onChange: PropTypes.func
    };

    static defaultProps = {
      defaultValue: {},
      onChange: noop
    };

    constructor(props) {
      super(props);

      this.onRemove = this.onRemove.bind(this);
      this.onChange = this.onChange.bind(this);
    }

    render () {
      let {defaultValue} = this.props;
      let rows = map(defaultValue, (value, name) =>
        <TableRow
          name={name}
          value={value}
          onRemove={(name) => this.onRemove(name)}
          onChange={(name, value) => this.onChange(name, value)} />
      );

      return (
        <div className="globals">
          <InputForm
            globals={defaultValue}
            onAdd={(name) => this.onChange(name, true)} />
          <Table>{rows}</Table>
        </div>
      );
    }

    onRemove(name) {
      this.props.onChange(this.remove(name));
    }

    onChange(name, value) {
      this.props.onChange(this.change(name, value));
    }

    change(name, value) {
      let globals = clone(this.props.defaultValue);
      globals[name] = value;
      return globals;
    }

    remove(name) {
      let globals = clone(this.props.defaultValue);
      delete globals[name];
      return globals;
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
