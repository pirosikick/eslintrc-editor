'use strict';
import {Component, PropTypes} from "react";
import CheckList from './CheckList';
import {Environments} from '../constants'
import actions from '../actions/env';

class Env extends Component {
  static propTypes = {
    values: PropTypes.object.isRequired,
    onAction: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  render() {
    let {values} = this.props;
    return (
      <CheckList
        id="ecma-features"
        name="ecmaFeatures"
        keys={Environments}
        defaultChecked={values}
        onChange={this.onChange}/>
    );
  }

  onChange(values) {
    this.props.onAction(actions.change(values));
  }
}

export default Env;
