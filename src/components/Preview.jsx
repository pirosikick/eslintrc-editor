import {Component} from "react";
import isNull from 'lodash/lang/isNull';
import isUndefined from 'lodash/lang/isUndefined';
import forEach from 'lodash/collection/forEach';
import forEachRight from 'lodash/collection/forEachRight';
import noop from 'lodash/utility/noop';
import cx from 'classnames';

export default
  class Preview extends Component {
    static defaultProps = {
      indent: 2,
      onRest: noop
    }

    constructor(props) {
      super(props);
      this.onReset = this.onReset.bind(this);
    }

    render() {
      let {hidden} = this.props;
      let json = this.getJSON();

      return (
        <div className={cx("preview", { hidden })}>
          <button className="pure-button preview__reset-button" onClick={this.onReset}>
            <i className="fa fa-trash-o"/>
            reset all
          </button>
          <pre className="preview__json">{json}</pre>
        </div>
      );
    }

    onReset() {
      this.props.onReset();
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
      }

      let newArgs = [];
      forEachRight(args, (value, i) => {
        if (isNull(value) || isUndefined(value)) {
          return;
        }
        newArgs[i] = value;
      });

      if (newArgs.length === 1) {
        return newArgs[0] - 0;
      }

      return newArgs;
    }
  }

