import cx from 'classnames';
import React, {Component} from "react";

export default
  class Main extends Component {
    render () {
      let {className} = this.props;
      return <div {...this.props} className={cx('main', className)}/>;
    }
  }
