import React, {Component} from "react";
import cx from 'classnames';

export default
  class Preview extends Component {
    static defaultProps = {
      indent: 2
    }

    render() {
      let {target, hidden, indent} = this.props;

      return (
        <div className={cx("preview", { hidden })}>
          <pre className="preview__json">{
            JSON.stringify(target, null, indent)
          }</pre>
        </div>
      );
    }
  }

