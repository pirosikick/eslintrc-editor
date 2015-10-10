'use strict';
import {createActions} from '../util/redux';
import forEachRight from 'lodash/collection/forEachRight';
import isNull from 'lodash/lang/isNull';

export default createActions({
  setEnv: (env = []) => ({ env }),
  setEcmaFeatures: (ecmaFeatures = []) => ({ ecmaFeatures }),
  setParser: (parser) => ({ parser }),
  setGlobals: globals => ({ globals }),
  setRules: rules => ({ rules }),
  setEcmaOrParser: value => ({ value })
});
