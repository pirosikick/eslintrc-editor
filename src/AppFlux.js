'use strict';

import _ from "lodash";
import {Flux, Actions, Store} from "flummox";
import {ENV, ECMA_FEATURES} from "./const";

class CommonActions extends Actions {
  init () {}

  initRuleConfigs (rules) {
    return { rules };
  }

  changeEnv (name, enabled) {
    return { name, enabled };
  }

  changeRuleConfig (name, config) {
    return { name, config };
  }
}

class CommonStore extends Store {

  constructor (flux) {
    super();

    const actions = flux.getActions('common');
    this.register(actions.init, this.init)
    this.register(actions.initRuleConfigs, this.initRuleConfigs);
    this.register(actions.changeEnv, this.handleChangeEnv);
    this.register(actions.changeRuleConfig, this.handleChangeRuleConfig);

    let ruleConfigs ={};

    let enabled = false;
    let env = ENV.map(name => ({ name, enabled }));
    let ecmaFeatures = ECMA_FEATURES.map(name => ({ name, enabled }));

    this.state = { env, ecmaFeatures, ruleConfigs };
  }

  initRuleConfigs (rules) {
  }

  handleChangeEnv (message) {
    let env = _.clone(this.state.env);
    let target = undefined;

    _.each(env, (e, i) => {
      if (e.name === message.name) target = i;
    })

    if (target !== undefined) env[target] = message;

    this.setState({ env });
  }

  handleChangeRuleConfig (message) {
    let { ruleConfigs } = this.state;
    let { name, config } = message;

    ruleConfigs[name] = config;

    this.setState({ ruleConfigs });
  }

  getRuleConfig (name) {
    return this.state.ruleConfigs[name];
  }

  toJson () {
    let {env, ecmaFeatures, ruleConfigs} = this.state;
    let json = { env: {}, ecmaFeatures: {}, rule: {} };

    _.each(env, (e) => {
      if (e.enabled) json.env[e.name] = e.enabled;
    });

    _.each(ecmaFeatures, (e) => {
      if (e.enabled) json.ecmaFeatures[e.name] = e.enabled;
    });

    return JSON.stringify(json, null, 2);
  }
}

export default class AppFlux extends Flux {
  constructor () {
    super();

    this.createActions('common', CommonActions);
    this.createStore('common', CommonStore, this);
  }
}
