'use strict';
import cx from 'classnames';
import {Component} from "react";
import {onResize} from 'on-resize/react';

@onResize()
class Wrapper extends Component {
  render () {
    let {height} = this.props;
    let className = cx('wrapper', this.props.className);
    return (
      <div className={className} style={{ height: height - 0 }}>
        {this.props.children}
      </div>
    );
  }
}

export default Wrapper;
