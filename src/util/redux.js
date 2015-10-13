// https://gist.github.com/skevy/8a4ffc3cfdaf5fd68739

import zipObject from 'lodash/array/zipObject';
import map from 'lodash/collection/map';
import mapValues from 'lodash/object/mapValues';
import uniqueId from 'uniqueid';

// Create actions that don't need constants :)
export const createActions = (actionObj) => {
  const baseId = uniqueId();
  return zipObject(map(actionObj, (actionCreator, key) => {
    const actionId = `${baseId}-${key}`;
    const method = (...args) => {
      const result = actionCreator(...args);

      if (typeof result === 'function') {
        return result;
      }

      return { type: actionId, ...(result || {}) };
    };
    method._id = actionId;
    return [key, method];
  }));
};

// Get action ids from actions created with `createActions`
export const getActionIds = (actionCreators) => {
  return mapValues(actionCreators, (value, key) => {
    return value._id;
  });
};

// Replace switch statements in stores (taken from the Redux README)
export const createReducer = (initialState, handlers) => {
  return (state = initialState, action) =>
  handlers[action.type] ?
  handlers[action.type](state, action) :
  state;
};
