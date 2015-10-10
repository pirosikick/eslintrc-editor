import {Component} from "react";
import isNull from 'lodash/lang/isNull';
import forEach from 'lodash/collection/forEach';
import forEachRight from 'lodash/collection/forEachRight';
import cx from 'classnames';

export default
  class Preview extends Component {
    static defaultProps = {
      indent: 2
    }

    render() {
      let {hidden} = this.props;
      let json = this.getJSON();

      return (
        <div className={cx("preview", { hidden })}>
          <pre className="preview__json">{json}</pre>
        </div>
      );
    }

    getJSON() {
      let {target, indent} = this.props;
      let data = {};
      data.env = target.env;
      data.globals = target.globals;
      if (target.ecmaOrParser === 'parser' && target.parser) {
        data.parser = target.parser;
      } else if (target.ecmaOrParser === 'ecmaFeatures' && target.ecmaFeatures) {
        data.ecmaFeatures = target.ecmaFeatures;
      }

      data.rules = {};
      forEach(target.rules, (args, name) =>
        data.rules[name] = this.normalizeRuleArgs(args));

      return JSON.stringify(data, null, indent);
    }

    normalizeRuleArgs(args) {
      if (args[0] == 0) {
        return 0;
      } else if (args.length === 1) {
        return args[0] - 0;
      }

      let newArgs = [];
      forEachRight(args, (value, i) => {
        if (isNull(value)) {
          return;
        }
        newArgs[i] = value;
      });
      return newArgs;
    }
  }

