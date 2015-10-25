import {Component} from "react";
import {reset, importJSON} from '../actions/app';
import isNull from 'lodash/lang/isNull';
import isUndefined from 'lodash/lang/isUndefined';
import forEach from 'lodash/collection/forEach';
import forEachRight from 'lodash/collection/forEachRight';
import noop from 'lodash/utility/noop';
import cx from 'classnames';
import stripJsonComments from 'strip-json-comments';

export default
  class Preview extends Component {
    static defaultProps = {
      indent: 2,
      onRest: noop
    }

    constructor(props) {
      super(props);
      this.openFileFinder = this.openFileFinder.bind(this);
      this.onReset = this.onReset.bind(this);
    }

    render() {
      let {hidden} = this.props;
      let json = this.getJSON();

      return (
        <div className={cx("preview", { hidden })}>
          <div className="preview__buttons">
            <button className="pure-button preview__button" onClick={this.openFileFinder}>
              <i className="fa fa-upload"/>
              import
            </button>
            <button className="pure-button preview__button" onClick={this.onReset}>
              <i className="fa fa-trash-o"/>
              reset all
            </button>
          </div>
          <pre className="preview__json">{json}</pre>
        </div>
      );
    }

    onReset() {
      this.props.onAction(reset());
    }

    openFileFinder() {
      let file = document.createElement('input');
      file.type = 'file';
      file.accept = '*';
      file.onchange = (e) => {
        let reader = new FileReader();
        reader.onload = (e) => this.importJSON(reader.result);
        reader.readAsText(e.target.files[0]);
      };
      file.click();
    }

    importJSON(text) {
      try {
        text = stripJsonComments(text);
        let data = JSON.parse(text);
        this.props.onAction(importJSON(data));
      } catch (e) {
        alert('Invalid JSON format data.');
      }
    }

    getJSON() {
      let {target, indent, ecmaOrParser} = this.props;
      let data = {};
      data.env = target.env;
      data.globals = target.globals;
      if (ecmaOrParser === 'parser' && target.parser) {
        data.parser = target.parser;
      } else if (ecmaOrParser === 'ecmaFeatures' && target.ecmaFeatures) {
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

