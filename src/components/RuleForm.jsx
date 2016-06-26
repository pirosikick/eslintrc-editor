import React, {PropTypes} from 'react';
import traverse from 'json-schema-traverser';

const RuleForm = ({name, schemata}) =>
  <div className="rule-form">
    <h1>{name}</h1>
    <pre>{JSON.stringify(schemata, null, 2)}</pre>
    <ol type="1">{
      schemata.map((schema, index) =>
        <li>
          <RuleArgForm
            plugin=""
            rule={name}
            index={index}
            schema={schema} />
        </li>
      )
    }</ol>
  </div>;

/**
 * @param {object} props
 * @param {string} props.plugin - plugin name
 * @param {string} props.rule - rule name
 * @param {number} props.index - index of rule arguments
 * @param {Object|null} props.schema - schema of rule argument
 */
const RuleArgForm = ({plugin, rule, index, schema}) => {
  return (
    <form className="form">
      {schemaToComponent(schema)}
    </form>
  );
};

const schemaToComponent = (schema, name = '') => {
  switch(schema.type) {
    case 'object':
      if (schema.properties) {
        return <ObjectForm schema={schema} />;
      }
      break;
    case 'array':
      return <ArrayForm schema={schema} />;
    case 'string':
      return <input className="form-control" type="text" />;
    case 'number':
    case 'integer':
      return <input className="form-control" type="number" />;
    case 'boolean':
      return <BooleanInput onChange={e => console.log(e)}/>
  }
  if (Array.isArray(schema.enum)) {
    return (
      <select className="form-control">{
        schema.enum.map(value => <option value={value}>{value}</option>)
      }</select>
    );
  }
  return null;
};

const BooleanInput = props =>
  <div className="checkbox">
    <label>
      <input
        type="checkbox"
        checked={props.value}
        onChange={e => props.onChange({ props, value: e.target.checked })}
      /> {props.name || ""}
    </label>
  </div>;

const ObjectForm = ({plugin, rule, index, schema}) => {
  const {properties} = schema;
  const fields = Object.keys(properties).map(name => {
    const schema = properties[name];
    if (schema.type === 'boolean') {
      return (
        <div className="form-group">
          <BooleanInput name={name} onChange={e => console.log(e)}/>
        </div>
      );
    }
    return (
      <div className="form-group">
        <label className="control-label">{name}</label>
        {schemaToComponent(schema, name)}
      </div>
    );
  });

  return <div>{fields}</div>;
};

const ArrayForm = () => <span>array</span>;

export default RuleForm;
