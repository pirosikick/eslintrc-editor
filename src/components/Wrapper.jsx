'use strict';
import cx from 'classnames';
import {Component} from "react";
import {onResize} from 'on-resize/react';

//@onResize()
class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = { height: 0 };
  }

  render () {
    let {height} = this.state;
    let className = cx('wrapper', this.props.className);
    return (
      <div className={className} style={{ height }}>
        {this.props.children}
      </div>
    );
  }

  componentDidMount() {
    this.setState({ height: window.innerHeight });
    window.addEventListener('resize', () => {
      this.setState({ height: window.innerHeight });
    });
  }
}

export default Wrapper;
