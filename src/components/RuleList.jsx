import React from 'react';

const Checkbox = ({plugin, name, checked, onToggle, onFocus}) =>
  <div className="rule-checkbox">
    <a href="javascript:void(0);" onClick={() => onFocus(name)}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onToggle(name)} />
      <label>{name}</label>
    </a>
  </div>;

const RuleList = ({
  plugin,
  rules,
  checked,
  onToggleEnabled,
  onFocus
}) =>
  <div className="rule-list">
    <ul className="rule-list__list">
      {
        Object.keys(rules).map(name =>
          <li key={`${plugin}.${name}`}>
            <Checkbox
              plugin={plugin}
              name={name}
              checked={checked[name]}
              onToggle={onToggleEnabled}
              onFocus={onFocus}/>
          </li>
        )
      }
    </ul>
  </div>;

export default RuleList;
