'use strict';
import {createActions} from '../util/redux';

export default createActions({
  setEnv: (env = []) => ({ env }),
  setEcmaFeatures: (ecmaFeatures = []) => ({ ecmaFeatures }),
  setGlobals: globals => ({ globals }),
  changeRule: (name, args) => ({ name, args })
});
