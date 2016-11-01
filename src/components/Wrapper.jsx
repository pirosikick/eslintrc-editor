import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = { height: 0 };
  }

  componentWillMount() {
    if (global.window) {
      this.setState({ height: window.innerHeight });
    }
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({ height: window.innerHeight });
    });
  }

  render() {
    const { height } = this.state;
    const className = cx('wrapper', this.props.className);
    return (
      <div className={className} style={{ height }}>
        {this.props.children}
      </div>
    );
  }
}

Wrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element),
};

export default Wrapper;
