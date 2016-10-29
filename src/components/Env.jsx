import React, { Component, PropTypes } from 'react';
import CheckList from './CheckList';
import { Environments } from '../constants';
import actions from '../actions/env';

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
        keys={Environments}
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
