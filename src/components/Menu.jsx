/* eslint-disable no-script-url */
import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import noop from 'lodash/utility/noop';
import viewActions from '../actions/view';

const { selectMenuItem, openDocument } = viewActions;

const homeUrl = 'https://pirosikick.github.io/eslintrc-editor/';
const eslintUrl = 'http://eslint.org';
const githubUrl = 'https://github.com/pirosikick/eslintrc-editor';
const docs = {
  configure: 'docs/user-guide/configuring.md',
  cli: 'docs/user-guide/command-line-interface.md',
  rules: 'docs/rules/README.md',
};

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.selectPreview = this.selectMenuItem.bind(this, 'preview');
    this.selectDocument = this.selectMenuItem.bind(this, 'document');
    this.openConfigure = this.openDocument.bind(this, docs.configure);
    this.openCLI = this.openDocument.bind(this, docs.cli);
    this.openRules = this.openDocument.bind(this, docs.rules);
  }

  openDocument(md) {
    this.emitAction(openDocument(md));
  }

  selectMenuItem(name) {
    this.emitAction(selectMenuItem(name));
  }

  emitAction(action) {
    this.props.onAction(action);
  }

  render() {
    const { selectedItem } = this.props;

    return (
      <div className="menu pure-menu pure-menu-horizontal">
        <Link heading href={homeUrl}>.eslintrc editor</Link>
        <List key="menu-left">
          <ListItem key="menu-item-preview" selected={selectedItem === 'preview'}>
            <Link onClick={this.selectPreview}>Preview</Link>
          </ListItem>
          <ListItem key="menu-item-doc" selected={selectedItem === 'document'} hasChildren>
            <Link onClick={this.selectDocument}>Document</Link>
            <Children>
              <ListItem key="menu-item-doc-config">
                <Link onClick={this.openConfigure}>Configure ESLint</Link>
              </ListItem>
              <ListItem key="menu-item-doc-cli">
                <Link onClick={this.openCLI}>Command Line Interface</Link>
              </ListItem>
              <ListItem key="menu-item-doc-rules">
                <Link onClick={this.openRules}>Rules</Link>
              </ListItem>
            </Children>
          </ListItem>
        </List>
        <List key="menu-right" right>
          <ListItem key="menu-item-github">
            <Link href={githubUrl} target="_blank">GitHub</Link>
          </ListItem>
          <ListItem key="menu-item-eslint">
            <Link href={eslintUrl} target="_blank">ESLint</Link>
          </ListItem>
        </List>
      </div>
    );
  }
}

Menu.propsTypes = {
  selectedItem: PropTypes.string,
  onAction: PropTypes.func,
};

Menu.defaultProps = {
  selectedItem: '',
  onAction: noop,
};


class List extends Component {
  render() {
    const className = cx(
      'pure-menu-list menu__list',
      this.props.right && 'menu__list--on-right'
    );
    return (
      <ul className={className}>
        {this.props.children}
      </ul>
    );
  }
}

class Children extends Component {
  render() {
    return (
      <ul className="pure-menu-children menu__children">
        {this.props.children}
      </ul>
    );
  }
}

class ListItem extends Component {
  render() {
    const { selected, hasChildren, children } = this.props;
    const className = cx(
      'menu__item pure-menu-item pure-menu-allow-hover',
      selected && 'pure-menu-selected',
      hasChildren && 'pure-menu-has-children'
    );
    return <li className={className}>{children}</li>;
  }
}

class Link extends Component {
  render() {
    const { href, target, onClick, heading } = this.props;
    const className = cx(
      'pure-menu-link menu__link',
      heading && 'pure-menu-heading menu__heading'
    );
    return (
      <a
        className={className}
        href={href || 'javascript:void(0);'}
        onClick={onClick || noop}
        target={target || ''}
      >
        {this.props.children}
      </a>
    );
  }
}
