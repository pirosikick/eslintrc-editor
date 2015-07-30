import React, {Component, findDOMNode} from "react";
import MarkdownDocument from "./MarkdownDocument.jsx";

export default
  class Document extends Component {
    constructor(props) {
      super(props);

      this.state = { url: props.url };
      this.onClickLink = this.onClickLink.bind(this);
    }

    onClickLink(e) {
      e.preventDefault();

      if (e.target.href) {
        this.setState({ url: `docs/user-guide/${e.target.href}.md` })
      }
    }

    render() {
      let {url} = this.state;

      return (
        <div className="document markdown-body">
          <MarkdownDocument url={url} onClickLink={this.onClickLink.bind(this)}/>
        </div>
      );
    }
  }

