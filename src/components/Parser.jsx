'use strict';
import {Component, PropTypes} from "react";

class Parser extends Component {
  static propTypes = {
    values: PropTypes.array.isRequired,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func
  };

  static defaultProps = {
    defaultValue: "",
    onChange: function () {}
  }

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    let {values, defaultValue, onChange} = this.props;
    let options = values.map(v => <option value={v}>{v}</option>);

    return (
      <div className="pure-form">
        <select className="parser-option__pulldown" onChange={this.onChange}>
          <option>select parser</option>
          {options}
        </select>
      </div>
    );
  }

}

export default Parser;
