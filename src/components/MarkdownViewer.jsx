'use strict';
import {Component} from "react";
import md2react from "md2react";

export default class MarkdownViewer extends Component {
  render() {
    return (
      <div className="document markdown-body">
        {md2react(this.props.md)}
      </div>
    );
  }
}
