'use strict';
import cx from 'classnames';
import React, {Component} from "react";
import {onResize} from 'on-resize/react';

@onResize()
export default class Wrapper extends Component {
  render () {
    let {className, height, style} = this.props;
    className = cx('wrapper', className);

    style = style || {};
    style.height = height - 0;

    return <div {...this.props} className={className} style={style}/>;
  }
}
