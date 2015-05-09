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
    this.register(actions.init, this.init);
    this.register(actions.initRuleConfigs, this.initRuleConfigs);
    this.register(actions.changeEnv, this.handleChangeEnv);
    this.register(actions.changeRuleConfig, this.handleChangeRuleConfig);

    let ruleConfigs ={};

    let setFalse = (obj, name) => { obj[name] = false };
    let env = Immutable.Map(_.transform(ENV, setFalse, {}));
    let ecmaFeatures = Immutable.Map(_.transform(ECMA_FEATURES, setFalse, {}));

    this.state = { env, ecmaFeatures, ruleConfigs };
  }

  initRuleConfigs (rules) {
  }

  handleChangeEnv (message) {
    let env = this.state.env.set(message.name, message.enabled);

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
