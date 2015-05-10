"use strict";

import _ from 'lodash';
import React, {PropTypes} from "react";

class CheckBox extends React.Component {
  render () {
    let { name, enabled, className } = this.props;

    return (
      <label className={className || ''}>
        <input
          type="checkbox"
          name={name}
          defaultChecked={enabled}/>{name}
      </label>
    );
  }
}

class CheckBoxGroup extends React.Component {
  render () {
    let { className, data } = this.props;

    let checkboxes = this.props.data.map((enabled, name) => {
      return <CheckBox name={name} enabled={enabled}/>;
    });

    return (
      <div
        className={className || ''}
        onChange={this.onChange.bind(this)}>
        { checkboxes }
      </div>
    );
  }

  onChange (e) {
    let { name, checked } = e.target;
    this.props.onChange(this.props.name, name, checked);
  }
}

class RuleList extends React.Component {
  constructor (props) {
    super(props);
    this.state = props.ruleConfigs;
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
  constructor (props) {
    super(props);

    this.commonActions = props.flux.getActions('common');
  }

  render () {
    let json = this.props.commonStore.toJson();
    let { ruleConfigs } = this.props.commonStore.state;

    return (
      <div className="app">
        <h1>eslintrc editor</h1>

        <h2>env</h2>

        <CheckBoxGroup
          name="env"
          data={this.props.env}
          onChange={this.onToggleCheckBox.bind(this)}/>

        <h2>ecmaFeatures</h2>

        <CheckBoxGroup
          name="ecmaFeatures"
          data={this.props.ecmaFeatures}
          onChange={this.onToggleCheckBox.bind(this)}/>

        <h2>rules</h2>
        <RuleList ruleConfigs={ruleConfigs}/>

        <pre dangerouslySetInnerHTML={{ __html:json }}></pre>
      </div>
    );
  }

  onToggleCheckBox (group, name, enabled) {
    this.commonActions.toggleCheckBox(group, name, enabled);
  }
}
