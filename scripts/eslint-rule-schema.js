/* eslint-disable */
const loadRules = require('eslint/lib/load-rules');
const reduce = require('lodash/collection/reduce');

const schemata = reduce(loadRules(), (schema, filepath, name) => {
  const rule = require(filepath);
  const s = rule.schema || rule.meta.schema;
  schema.push({ name, schema: s });
  return schema;
}, []);

console.log(JSON.stringify(schemata, null, 2));
