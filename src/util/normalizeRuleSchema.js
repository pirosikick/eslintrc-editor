import isArray from 'lodash/lang/isArray';
import map from 'lodash/collection/map';
import zipObject from 'lodash/array/zipObject';

const quotePropsSchema = [
  {
    type: 'enum',
    options: [
      'always',
      'as-needed',
      'consistent',
      'consistent-as-needed',
    ],
  },
  {
    type: 'object',
    properties: {
      keywords: { type: 'bool' },
      unnecessary: { type: 'bool' },
      numbers: { type: 'bool' },
    },
    additionalProperties: false,
  },
];

function normalizeArgDef(argDef) {
  if (argDef.enum) {
    return { type: 'enum', options: argDef.enum };
  }

  const { oneOf } = argDef;
  let { type } = argDef;

  if (oneOf) {
    return {
      type: 'oneOf',
      defs: normalizeRuleSchema(oneOf), // eslint-disable-line no-use-before-define
    };
  } else if (isArray(type)) {
    const types = argDef.type;
    const toDef = t => (
      t === 'object'
        ? { type: t, properties: argDef.properties }
        : { type: t }
    );

    return {
      type: 'oneOf',
      defs: types.map(toDef).map(normalizeArgDef),
    };
  } else if (typeof (type) === 'string') {
    type = type.replace('boolean', 'bool');
  }

  if (type === 'object') {
    // eslint-disable-next-line no-use-before-define
    return { type, properties: normalizeProperties(argDef.properties) };
  }

  return { type };
}

function normalizeProperties(properties) {
  return zipObject(map(properties, (def, key) => [key, normalizeArgDef(def)]));
}

function normalizeRuleSchema(schema, name = '') {
  // TODO: parse "anyOf"
  if (name === 'quote-props') {
    return quotePropsSchema;
  }

  const s = isArray(schema) ? schema : [schema];
  return s.map(normalizeArgDef);
}

export default normalizeRuleSchema;
