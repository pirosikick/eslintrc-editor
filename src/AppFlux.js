'use strict';

import _ from "lodash";
import Immutable from "immutable";
import {Flux, Actions, Store} from "flummox";
import {ENV, ECMA_FEATURES} from "./const";

class CommonActions extends Actions {
  init () {}

  initRuleConfigs (rules) {
    return { rules };
  }

  toggleCheckBox (group, name, enabled) {
    return { group, name, enabled };
  }

  changeEnv (name, enabled) {
    return { name, enabled };
  }

  changeEcmaFeatures (name, enabled) {
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
    this.register(actions.init, this.init);
    this.register(actions.initRuleConfigs, this.initRuleConfigs);
    this.register(actions.toggleCheckBox, this.handleToggleCheckBox);
    this.register(actions.changeEnv, this.handleChangeEnv);
    this.register(actions.changeEcmaFeatures, this.handleEcmaFeatures);
    this.register(actions.changeRuleConfig, this.handleChangeRuleConfig);

    let ruleConfigs ={};

    let setFalse = (obj, name) => { obj[name] = false };
    let env = Immutable.Map(_.transform(ENV, setFalse, {}));
    let ecmaFeatures = Immutable.Map(_.transform(ECMA_FEATURES, setFalse, {}));

    this.state = { env, ecmaFeatures, ruleConfigs };
  }

  initRuleConfigs (rules) {
  }

  handleToggleCheckBox (message) {
    let { group, name, enabled } = message;

    switch (group) {
      case 'env':
        return this.handleChangeEnv({ name, enabled });
      case 'ecmaFeatures':
        return this.handleChangeEcmaFeatures({ name, enabled });
    }
  }

  handleChangeEnv (message) {
    let env = this.state.env.set(message.name, message.enabled);
    this.setState({ env });
  }

  handleChangeEcmaFeatures (message) {
    let ecmaFeatures = this.state.ecmaFeatures.set(message.name, message.enabled);

    this.setState({ ecmaFeatures });
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
    let env = this.state.env.filter(_.identity).toObject()
      , ecmaFeatures = this.state.ecmaFeatures.filter(_.identity).toObject()
      , rules = {};

    return JSON.stringify({env, ecmaFeatures, rules}, null, 2);
  }
}

export default class AppFlux extends Flux {
  constructor () {
    super();

    this.createActions('common', CommonActions);
    this.createStore('common', CommonStore, this);
  }
}
