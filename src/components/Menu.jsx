'use strict';
import {Component, PropTypes} from "react";
import cx from "classnames";

const NOOP = function () {};

export class Menu extends Component {
  static propsTypes = {
    horizotal: PropTypes.bool,
    items: PropTypes.array,
    selectedItem: PropTypes.string
  };

  static defaultProps = {
    horizotal: false,
    items: [],
    selectedItem: "",
    onClickItem: NOOP
  };

  constructor(props) {
    super(props);

    this.onClickItem = this.props.onClickItem.bind(this);
  }

  menuItem(props) {
    let {selectedItem} = this.props;
    let {name, children} = props;

    props.onClick = this.onClickItem;
    props.selected = selectedItem === name;

    if (typeof children === 'array' && children.length) {
      props.children = [
        <MenuChildren>{children.map(this.menuItem)}</MenuChildren>
      ];
    }

    return <MenuItem {...props}/>;
  }

  onClickItem(props) {
    this.props.onClickItem(props);
  }

  render() {
    let {horizontal, items, selectedItem} = this.props;
    let className = cx("pure-menu menu", {
      "pure-menu-horizontal": horizontal
    });

    return (
      <div className={className}>
        <MenuList>{items.map(this.menuItem, this)}</MenuList>
      </div>
    );
  }
}

class MenuList extends Component {
  render() {
    return (
      <ul className="pure-menu-list menu__list">
        {this.props.children}
      </ul>
    );
  }
}

class MenuChildren extends Component {
  render() {
    return (
      <ul className="pure-menu-children menu__children">
        {this.props.children}
      </ul>
    );
  }
}

class MenuItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    link: PropTypes.string,
    label: PropTypes.string,
    selected: PropTypes.bool,
    allowHover: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.array
  };

  static defaultProps = {
    link: "javascript:void(0);",
    label: "",
    selected: false,
    allowHover: false,
    onClick: NOOP,
    children: []
  };

  hasChildren() {
    return !!this.props.children.length;
  }

  onClick(e) {
    e.stopPropagation();
    this.props.onClick(this.props);
  }

  render() {
    let {name, link, label, selected, allowHover, children} = this.props;
    let className = cx("pure-menu-item menu__item", {
      "pure-menu-selected": selected,
      "pure-menu-has-children": this.hasChildren(),
      "pure-menu-allow-hover": allowHover
    });

    return (
      <li className={className}>
        <a
          className="pure-menu-link menu__link"
          href={link}
          onClick={this.onClick.bind(this)}>{label || name}</a>
        {children}
      </li>
    );
  }
}
