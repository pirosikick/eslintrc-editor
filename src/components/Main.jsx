import cx from 'classnames';
import {Component} from "react";

export default
  class Main extends Component {
    render () {
      let {className} = this.props;
      return <div {...this.props} ref="main" className={cx('main', className)}/>;
    }

    componentDidUpdate() {
      this.refs.main.scrollTop = 0;
    }
  }
