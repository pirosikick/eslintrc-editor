import React, {Component} from "react";
import md2react from "md2react";

export default
  class MarkdownDocument extends Component {
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
  }
