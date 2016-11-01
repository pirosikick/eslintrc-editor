import React, { Component, PropTypes } from 'react';
import CheckList from './CheckList';
import { ECMAFeatures } from '../constants';
import * as actions from '../actions/ecmaFeatures';

class EcmaFeatures extends Component {
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
        keys={ECMAFeatures}
        defaultChecked={values}
        onChange={this.onChange}
      />
    );
  }
}

EcmaFeatures.propTypes = {
  values: PropTypes.objectOf(PropTypes.bool).isRequired,
  onAction: PropTypes.func.isRequired,
};

export default EcmaFeatures;
