'use strict';
import {createActions} from '../util/redux';

export default createActions({
  setEnv: (env = []) => ({ env }),
  setEcmaFeatures: (ecmaFeatures = []) => ({ ecmaFeatures }),
  setParser: (parser) => ({ parser }),
  setGlobals: globals => ({ globals }),
  changeRule: (name, args) => ({ name, args })
});
