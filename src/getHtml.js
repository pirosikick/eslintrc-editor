/* eslint-disable */
global.React = require('react'); // for md2react
require('babel-register')({ extensions: ['.js', '.jsx'] });
module.exports = require('./_getHtml.jsx').default;
