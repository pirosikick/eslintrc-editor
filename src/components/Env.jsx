import React, { Component, PropTypes } from 'react';
import schema from 'eslint-rule-schemata/schema.json';
import CheckList from './CheckList';
import * as actions from '../actions/env';

const envs = Object.keys(schema.definitions.env.properties);

class Env extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(values) {
    this.props.onAction(actions.change(values));
  }

  render() {
    const { values } = this.props;
    return (
      <CheckList
        id="ecma-features"
        name="ecmaFeatures"
        keys={envs}
        defaultChecked={values}
        onChange={this.onChange}
      />
    );
  }
}

Env.propTypes = {
  values: PropTypes.objectOf(PropTypes.bool).isRequired,
  onAction: PropTypes.func.isRequired,
};

export default Env;
