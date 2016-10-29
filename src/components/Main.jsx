import React, { Component } from 'react';
import cx from 'classnames';

export default
  class Main extends Component {
    componentDidUpdate() {
      this.refs.main.scrollTop = 0;
    }

    render() {
      const { className } = this.props;
      return <div {...this.props} ref="main" className={cx('main', className)} />;
    }
  }
