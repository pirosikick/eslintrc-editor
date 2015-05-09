'use strict';

import {Flux, Actions, Store} from "flummox";
import data from "./data";

class CommonActions extends Actions {
  initRuleConfigs (rules) {
    return { rules };
  }

  changeRuleConfig (name, config) {
    return { name, config };
  }
}

class CommonStore extends Store {
  constructor (flux) {
    super();

    const actions = flux.getActions('common');
    this.register(actions.initRuleConfigs, this.initRuleConfigs);
    this.register(actions.changeRuleConfig, this.handleChangeRuleConfig);

    this.state = {
      ruleConfigs: {}
    };
  }

  initRuleConfigs (rules) {
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
}

export default class AppFlux extends Flux {
  constructor () {
    super();

    this.createActions('common', CommonActions);
    this.createStore('common', CommonStore, this);
  }
}
