import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

export default
  class SideMenu extends Component {
    render() {
      const className = cx('sidemenu', this.props.className);

      return <div {...this.props} className={className} />;
    }
  }

SideMenu.propTypes = {
  className: PropTypes.string,
};
