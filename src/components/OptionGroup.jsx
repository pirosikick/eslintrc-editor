/* eslint-disable no-script-url */
import React, { Component } from 'react';
import cx from 'classnames';

class Icon extends Component {
  render() {
    const { type, className } = this.props;
    return <i className={cx(`fa fa-${type}`, className)} />;
  }
}

export default
  class OptionGroup extends Component {
    constructor(props) {
      super(props);

      this.state = { opened: props.defaultOpened || false };
      this.toggle = this.toggle.bind(this);
    }

    toggle() {
      this.setState({ opened: !this.state.opened });
    }

    render() {
      const prefix = 'option-group';

      const { opened } = this.state;
      const { name, children } = this.props;
      const className = cx(prefix, { [`${prefix}-is-opened`]: opened });
      const iconType = opened ? 'angle-down' : 'angle-right';

      return (
        <div className={className}>
          <a
            href="javascript:void(0)"
            className="option-group__header option-group-header"
            onClick={this.toggle}
          >
            <div>
              <h3 className="option-group-header__title">{name}</h3>
              <Icon type={iconType} className="option-group-header__icon" />
            </div>
          </a>
          <article className="option-group__body">{children}</article>
        </div>
      );
    }
  }
