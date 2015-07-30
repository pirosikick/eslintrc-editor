'use strict';
import cx from 'classnames';
import React, {Component} from "react";

class Icon extends Component {
  render () {
    let {type, className} = this.props;
    return <i className={cx(`fa fa-${type}`, className)}/>;
  }
}

export default
  class OptionGroup extends Component {
    constructor (props) {
      super(props);

      this.state = { opened: props.defaultOpened || false }
    }

    toggle () {
      this.setState({ opened: !this.state.opened })
    }

    render () {
      const prefix = 'option-group';

      let {opened} = this.state;
      let {name, children} = this.props;
      let className = cx(prefix, { [`${prefix}-is-opened`]: opened })
      let iconType = opened ? "chevron-up" : "chevron-down";

      return (
        <div className={className}>
          <a
            href="javascript:void(0)"
            className="option-group__header option-group-header"
            onClick={this.toggle.bind(this)}>
            <div>
              <Icon type={iconType} className="option-group-header__icon"/>
              <h3 className="option-group-header__title">{name}</h3>
            </div>
          </a>
          <article className="option-group__body">{children}</article>
        </div>
      );
    }
  }
