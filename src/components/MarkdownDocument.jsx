import React, {Component, findDOMNode} from "react";
import md2react from "md2react";

export default
  class MarkdownDocument extends Component {
    static defaultProps = {
      onClickLink: function () {}
    }

    constructor (props) {
      super(props);

      this.state = { md: '' };
      this.fetchMarkdown(props.url);
    }

    fetchMarkdown (url) {
      fetch(url)
        .then((response) => response.text())
        .then((md) => this.setState({ md }))
        .catch((e) => console.log(e));
    }

    render () {
      return md2react(this.state.md);
    }

    componentDidUpdate() {
      if (this.linkTags) {
        this.linkTags.forEach(this.unbindClickLinkListener, this);
      }

      this.linkTags = this.getLinks().map(this.bindClickLinkListener, this);
    }

    bindClickLinkListener(link) {
      link.addEventListener('click', this.props.onClickLink);
    }

    unbindClickLinkListener(link) {
      link.removeEventListener('click', this.props.onClickLink);
    }

    getLinks() {
      let linkNodeList = findDOMNode(this).querySelectorAll('a');
      return [].slice.call(linkNodeList);
    }
  }
