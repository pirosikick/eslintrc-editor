/* eslint-disable no-script-url */
import React, { Component, PropTypes } from 'react';
import md2react from '@pirosikick/md2react';
import noop from 'lodash/utility/noop';
import viewActions from '../actions/view';

const { openDocument } = viewActions;

export default class MarkdownViewer extends Component {
  constructor(props) {
    super(props);
    this.link = this.link.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault();
    const documentUrl = e.currentTarget.getAttribute('data-document-url');
    this.props.onAction(openDocument(documentUrl));
  }

  getBaseUrl() {
    const { url } = this.props;
    return url.split('/').slice(0, -1).join('/');
  }

  link(node, defs, key) {
    return (
      // eslint-disable-next-line
      <Link
        node={node}
        key={key}
        baseUrl={this.getBaseUrl()}
        onClick={this.onClick}
      />
    );
  }

  render() {
    const customComponents = { link: this.link };

    return (
      <div className="document markdown-body">
        {md2react(this.props.md, { customComponents })}
      </div>
    );
  }
}

MarkdownViewer.propTypes = {
  md: PropTypes.string,
  url: PropTypes.string,
  onAction: PropTypes.func,
};

MarkdownViewer.defaultProps = {
  url: '',
  md: '',
  onClickLink: noop,
};

class Link extends Component {
  constructor(props) {
    super(props);
    const href = props.node.href || '';
    this.isExternal = /^http/.test(href);
    this.isAbsolute = /^\//.test(href);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (this.isExternal) {
      return;
    }
    this.props.onClick(e);
  }

  getHref() {
    const { node } = this.props;

    if (this.isExternal) {
      return node.href;
    }

    return 'javascript:void(0);';
  }

  getDocumentUrl() {
    const { node, baseUrl } = this.props;
    if (this.isExternal) {
      return '';
    } else if (this.isAbsolute) {
      return node.href;
    }

    let url = `${baseUrl}/${node.href}`;
    if (!/\.md$/.test(url)) {
      url += '.md';
    }
    return url;
  }

  render() {
    const { node, key } = this.props;
    const props = {
      key,
      href: this.getHref(),
      title: node.title,
      onClick: this.onClick,
    };
    const children = [node.children[0].value];

    if (this.isExternal) {
      props.target = '_blank';
    } else {
      props['data-document-url'] = this.getDocumentUrl();
    }

    return <a {...props}>{children}</a>;
  }
}

Link.propTypes = {
  baseUrl: PropTypes.string,
  node: PropTypes.element,
  key: PropTypes.string,
  onClick: PropTypes.func,
};
Link.defaultProps = {
  baseUrl: PropTypes.string,
  node: {},
  key: '',
  onClick: noop,
};
