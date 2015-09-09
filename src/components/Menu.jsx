'use strict';
import {Component, PropTypes} from "react";
import cx from "classnames";

class Menu extends Component {
  static propTypes = {
    horizontal: PropTypes.bool
  };

  getDefaultProps() {
    return { horizontal: false };
  }

  render() {
    let {horizontal, children} = this.props;
    let cn =  cx("pure-menu menu", {
      "pure-menu-horizontal": horizontal
    });

    return <div className={cn}>{children}</div>;
  }
}

class MenuList extends Component {
  render() {
    return <ul {...this.props} className="pure-menu-list menu__list"/>;
  }
}

class MenuItem extends Component {
  static propTypes = {
    selected: PropTypes.bool,
    hasChildren: PropTypes.bool,
    allowHover: PropTypes.bool
  };

  render() {
    let {selected, hasChildren, allowHover} = this.props;
    let className = cx("pure-menu-item menu__item", this.props.className, {
      "pure-menu-selected": selected,
      "pure-menu-has-children": hasChildren,
      "pure-menu-allow-hover": allowHover
    });

    return <li {...this.props} className={className}/>;
  }
}

class MenuItemLink extends Component {
  render() {
    return <a {...this.props} className="pure-menu-link menu__link"/>;
  }
}

class MenuChildren extends Component {
  render() {
    return <ul {...this.props} className="pure-menu-children menu__children" />;
  }
}

export { Menu, MenuList, MenuItem, MenuItemLink, MenuChildren };
