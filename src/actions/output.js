'use strict';
import {createActions} from '../util/redux';

export default createActions({
  setEnv: (env = []) => ({ env }),
  setECMAFeatures: (ecmaFeatures = []) => ({ ecmaFeatures }),
  setGlobal: (name, value = true) => ({ name, value }),
  changeRule: (name, args) => {
    return { name, args };
  }
});
