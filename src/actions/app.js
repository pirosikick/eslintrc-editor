'use strict';
import {createActions} from '../util/redux';
import view from './view'
import output from './output';

export default createActions({
  init (deserialized) {
    deserialized = deserialized || {};
    let view = deserialized.view || {};
    let output = deserialized.output || {};
    return {view, output};
  },
  importJSON: (output) => ({output}),
  reset: () => {}
});

