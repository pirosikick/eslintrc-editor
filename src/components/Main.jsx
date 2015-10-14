import cx from 'classnames';
import {Component, findDOMNode} from "react";

export default
  class Main extends Component {
    render () {
      let {className} = this.props;
      return <div {...this.props} className={cx('main', className)}/>;
    }

    componentDidUpdate() {
      findDOMNode(this).scrollTop = 0;
    }
  }
