'use strict';
import {Component, PropTypes} from "react";
import Parsers from '../constants/Parsers';
import actions from '../actions/parser';

class Parser extends Component {
  static propTypes = {
    value: PropTypes.string,
    onAction: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.id = 'parser';
    this.onChange = this.onChange.bind(this);
  }

  render() {
    let {value} = this.props;
    let options = Parsers.map(p =>
      <option key={`${this.id}-${p}`} value={p}>{p}</option>
    );

    return (
      <div className="pure-form">
        <select
          className="parser-option__pulldown"
          value={value}
          onChange={this.onChange}>
          <option value="">select parser</option>
          {options}
        </select>
      </div>
    );
  }

  onChange(e) {
    this.props.onAction(actions.change(e.target.value));
  }
}

export default Parser;
