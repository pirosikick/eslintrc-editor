'use strict';
import {createActions} from '../util/redux';
import forEachRight from 'lodash/collection/forEachRight';
import isNull from 'lodash/lang/isNull';

export default createActions({
  setEnv: (env = []) => ({ env }),
  setEcmaFeatures: (ecmaFeatures = []) => ({ ecmaFeatures }),
  setParser: (parser) => ({ parser }),
  setGlobals: globals => ({ globals }),
  changeRule: (name, value) => {
    let newValue = [];
    forEachRight(value, (v, i) => {
      if (!isNull(v)) {
        newValue[i] = v
      }
    });
    if (newValue.length === 1) {
      newValue = newValue[0];
    }
    return { name, value: newValue };
  }
});
