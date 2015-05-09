"use strict";
import _ from 'lodash';
import React, {PropTypes} from "react";
import FluxCommponent from "flummox/component";

class RuleList extends React.Component {
  constructor (props) {
    super(props);

    let { ruleConfigs } = this.props.flux.getStore('common').state;

    this.state = ruleConfigs;
  }

  render () {
    let lists = _.map(this.state, (config, name) => {
      return (
        <li className="rule">
          <Rule name={name} enabled={config.enabled} status={config.status}/>
        </li>
      );
    });

    return <ul className="rules">{ lists }</ul>;
  }
}

class Rule extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    enabled: PropTypes.bool
  };

  static defaultProps = {
    enabled: true
  };

  constructor (props) {
    super(props)

    this.state = { enabled: !!props.enabled }
    this.ruleActions = props.flux.getActions('rule');
  }

  render () {
    return (
      <div className="rule">
        <h3>{ this.props.name }</h3>

        <label>
          <input ref="enabled"
                 type="checkbox"
                 onChange={this.onChange.bind(this)}
                 defaultChecked={ this.props.enabled }/>
          enabled
        </label>

        <p>
          status:
          <select ref="status" onChange={this.onChange.bind(this)}>
            <option value="0">off</option>
            <option value="1">warning</option>
            <option value="2">error</option>
          </select>
        </p>
      </div>
    );
  }

  enabled () {
    return React.findDOMNode(this.refs.enabled).checked;
  }

  status () {
    return React.findDOMNode(this.refs.status).value;
  }

  onChange (e) {
    this.ruleActions.change({
      name: this.props.name,
      enabled: this.enabled(),
      status: this.status()
    });
  }
}

export default class App extends React.Component {

  render () {
    var json = {
      env: {
        browser: false,
        node: false,
      },
      ecmaFeatures: {
      },
      rules: {
      }
    };

    return (
      <FluxCommponent flux={this.props.flux}>
        <h1>eslintrc editor</h1>
        <RuleList/>
        <pre dangerouslySetInnerHTML={{ __html:JSON.stringify(json, null, 2)}}></pre>
      </FluxCommponent>
    );
  }
}
