'use strict';
import {Component} from "react";

export default
  class DocumentLink extends Component {
    onClick(e) {
      e.preventDefault();
      e.stopPropagation();

      this.props.onClick(this.props.url);
    }

    render() {
      return (
        <a className="rule__help" href="#" onClick={this.onClick.bind(this)}>
          <i className="fa fa-info-circle"></i>
        </a>
      )
    }
  }

