'use strict';
import {Component, PropTypes} from "react";
import md2react from "@pirosikick/md2react";

const NOOP = function () {};

export default class MarkdownViewer extends Component {
  static propTypes = {
    md: PropTypes.string,
    onClickLink: PropTypes.func
  };

  static defaultProps = {
    md: "",
    onClickLink: NOOP
  };

  onClick(e) {
    if (e.target.isExternal) {
      return;
    }

    e.preventDefault();
    this.props.onClickLink(e);
  }

  render() {
    let link = (node, defs, key) => <Link node={node} key={key} />;
    let options = { customComponents: { link } };

    return (
      <div className="document markdown-body">
        {md2react(this.props.md, options)}
      </div>
    );
  }
}

class Link extends Component {
  static propTypes = {
    node: PropTypes.object,
    key: PropTypes.string,
    onClick: PropTypes.func
  };

  static defaultProps = {
    node: {},
    key: "",
    onClick: NOOP
  };

  constructor(props) {
    super(props);

    this.isExternal = /^http/.test(props.node.href || "");
  }

  render() {
    let {node, key} = this.props;
    let props = {
      key,
      href: node.href,
      title: node.title,
      onClick: this.props.onClick,
      children: [node.children[0].value]
    };

    if (this.isExternal) {
      props.target = '_blank';
    }

    return <a {...props}/>;
  }
}
