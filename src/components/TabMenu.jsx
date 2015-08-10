import React, {Component} from "react";
import cx from 'classnames';
import {keys, first, filter} from 'lodash';

export default
  class TabMenu extends Component {
    constructor(props) {
      super(props);
      let {tabs, defaultSelected} = props;

      this.state = {
        selected: defaultSelected || first(tabs).name
      };
    }

    onSelect(name) {
      this.setState({ selected: name });
    }

    render() {
      let {tabs} = this.props;
      let {selected} = this.state;
      let selectedTab = tabs.filter(t => t.name == selected)[0];

      return (
        <div className="tabmenu">
          <ul className="tabmenu__list tabmenu-list">
            {
              tabs.map((tab) => (
                <TabMenuListItem
                  name={tab.name}
                  selected={tab === selectedTab}
                  onSelect={this.onSelect.bind(this)}/>
              ))
            }
          </ul>

          <div className="tabmenu__contents">
            {selectedTab.component}
          </div>
        </div>
      );
    }
  }

class TabMenuListItem extends Component {
  render() {
    let {name, selected} = this.props;

    return (
      <li
        className={
          cx('tabmenu-list__item', {
            'tabmenu-list__item--is-selected': selected
          })
        }>
        <a
          data-tab-name={name}
          href="javascript:void(0)"
          className="tabmenu-list__link"
          onClick={this.onClick.bind(this)}>{name}</a>
      </li>
    );
  }

  onClick(e) {
    this.props.onSelect(e.target.getAttribute('data-tab-name'));
  }
}
