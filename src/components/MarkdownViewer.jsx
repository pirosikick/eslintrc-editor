'use strict';
import {Component, PropTypes} from "react";
import viewActions from '../actions/view';
import md2react from "@pirosikick/md2react";
import noop from 'lodash/utility/noop';

const {openDocument} = viewActions;

export default class MarkdownViewer extends Component {
  static propTypes = {
    md: PropTypes.string,
    url: PropTypes.string,
    onAction: PropTypes.func
  };

  static defaultProps = {
    url: "",
    md: "",
    onClickLink: noop
  };

  constructor(props) {
    super(props);
    this.link = this.link.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  render() {
    let customComponents = { link: this.link };

    return (
      <div className="document markdown-body">
        {md2react(this.props.md, {customComponents})}
      </div>
    );
  }

  link(node, defs, key) {
    return <Link
      node={node}
      key={key}
      baseUrl={this.getBaseUrl()}
      onClick={this.onClick}/>;
  }

  getBaseUrl() {
    let {url} = this.props;
    return url.split('/').slice(0, -1).join('/');
  }

  onClick(e) {
    e.preventDefault();
    let documentUrl = e.currentTarget.getAttribute('data-document-url');
    this.props.onAction(openDocument(documentUrl));
  }
}

class Link extends Component {
  static propTypes = {
    baseUrl: PropTypes.string,
    node: PropTypes.object,
    key: PropTypes.string,
    onClick: PropTypes.func
  };
  static defaultProps = {
    baseUrl: PropTypes.string,
    node: {},
    key: "",
    onClick: noop
  };

  constructor(props) {
    super(props);
    let href = props.node.href || "";
    this.isExternal = /^http/.test(href);
    this.isAbsolute = /^\//.test(href);
    this.onClick = this.onClick.bind(this);
  }

  render() {
    let {node, key} = this.props;
    let props = {
      key,
      href: this.getHref(),
      title: node.title,
      onClick: this.onClick,
      children: [node.children[0].value]
    };

    if (this.isExternal) {
      props.target = '_blank';
    } else {
      props['data-document-url'] = this.getDocumentUrl();
    }

    return <a {...props}/>;
  }

  onClick(e) {
    if (this.isExternal) {
      return;
    }
    this.props.onClick(e);
  }

  getHref() {
    let {node, baseUrl} = this.props;

    if (this.isExternal) {
      return node.href;
    }

    return 'javascript:void(0);';
  }

  getDocumentUrl() {
    let {node, baseUrl} = this.props;
    if (this.isExternal) {
      return "";
    } else if (this.isAbsolute) {
      return node.href;
    }

    let url = `${baseUrl}/${node.href}`;
    if (!/\.md$/.test(url)) {
      url += '.md';
    }
    return url;
  }
}
