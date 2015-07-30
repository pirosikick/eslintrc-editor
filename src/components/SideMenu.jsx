'use strict';
import cx from 'classnames';
import React, {Component} from "react";

export default
  class SideMenu extends Component {
    render () {
      let className = cx('sidemenu', this.props.className);

      return <div {...this.props} className={className}/>;
    }
  }
