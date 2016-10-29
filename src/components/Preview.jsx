import React, { Component } from 'react';
import isNull from 'lodash/lang/isNull';
import isUndefined from 'lodash/lang/isUndefined';
import forEach from 'lodash/collection/forEach';
import forEachRight from 'lodash/collection/forEachRight';
import noop from 'lodash/utility/noop';
import assign from 'lodash/object/assign';
import cx from 'classnames';
import stripJsonComments from 'strip-json-comments';
import appActions from '../actions/app';

const { reset, importJSON } = appActions;

function normalizeRuleArgs(args) {
  if (parseInt(args[0], 10) === 0) {
    return 0;
  }

  const newArgs = [];
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

export default
  class Preview extends Component {
    constructor(props) {
      super(props);
      this.openFileFinder = this.openFileFinder.bind(this);
      this.onReset = this.onReset.bind(this);
    }

    onReset() {
      this.props.onAction(reset());
    }

    getJSON() {
      const { target, indent } = this.props;
      const data = assign({}, target, { ecmaOrParser: undefined, rules: {} });

      if (target.ecmaOrParser === 'parser' && target.parser) {
        data.parser = target.parser;
      } else if (target.ecmaOrParser === 'ecmaFeatures' && target.ecmaFeatures) {
        data.ecmaFeatures = target.ecmaFeatures;
      }

      forEach(target.rules, (args, name) => {
        data.rules[name] = normalizeRuleArgs(args);
      });

      return JSON.stringify(data, null, indent);
    }

    importJSON(text) {
      try {
        const json = stripJsonComments(text);
        const data = JSON.parse(json);

        if (data.parser) {
          data.ecmaOrParser = 'parser';
        } else if (data.ecmaFeatures) {
          data.ecmaOrParser = 'ecmaFeatures';
        }

        this.props.onAction(importJSON(data));
      } catch (e) {
        // eslint-disable-next-line
        alert('Invalid JSON format data.');
      }
    }

    openFileFinder() {
      const file = document.createElement('input');
      file.type = 'file';
      file.accept = '*';
      file.onchange = e => {
        const reader = new FileReader();
        reader.onload = () => this.importJSON(reader.result);
        reader.readAsText(e.target.files[0]);
      };
      file.click();
    }

    render() {
      const { hidden } = this.props;
      const json = this.getJSON();

      return (
        <div className={cx('preview', { hidden })}>
          <div className="preview__buttons">
            <button className="pure-button preview__button" onClick={this.openFileFinder}>
              <i className="fa fa-upload" />
              import
            </button>
            <button className="pure-button preview__button" onClick={this.onReset}>
              <i className="fa fa-trash-o" />
              reset all
            </button>
          </div>
          <pre className="preview__json">{json}</pre>
        </div>
      );
    }
  }

Preview.defaultProps = {
  indent: 2,
  onRest: noop,
};
