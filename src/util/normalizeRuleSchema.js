'use strict';
import isArray from 'lodash/lang/isArray';
import map from 'lodash/collection/map';
import zipObject from 'lodash/array/zipObject';

function normalizeRuleSchema(schema) {
  schema = isArray(schema) ? schema : [schema];
  return schema.map(normalizeArgDef);
}

function normalizeArgDef(argDef) {
  if (argDef['enum']) {
    return { type: 'enum', options: argDef['enum'] }
  }

  let {oneOf, type, properties} = argDef;

  if (oneOf) {
    return {
      type: 'oneOf',
      defs: normalizeRuleSchema(oneOf)
    };
  } else if (isArray(type)) {
    let types = argDef.type;
    let toDef = type => type === 'object'
      ? { type, properties: argDef.properties }
      : { type }

    return {
      type: 'oneOf',
      defs: types.map(toDef).map(normalizeArgDef)
    };
  } else if (typeof(type) === 'string') {
    type = type.replace('boolean', 'bool');
  }

  if (type === 'object') {
    return { type, properties: normalizeProperties(argDef.properties) };
  }

  return { type };
}

function normalizeType(type) {
  if (typeof(type) === 'string') {
    type = type.replace('boolean', 'bool');
  }
  return type;
}

function normalizeProperties(properties) {
  return zipObject(map(properties, (def, key) => [key, normalizeArgDef(def)]))
}

export default normalizeRuleSchema;
