'use strict';
var path = require('path');

module.exports = {
  context: __dirname + '/src',
  entry: {
    client: './client'
  },
  output: {
    path: __dirname + "/.tmp/scripts",
    filename: "[name].bundle.js"
  },
  devtool: 'inline-source-map',
  externals: [
    { react: "var React" },
    { "react-dom": "var ReactDOM" },
    { "immutable": "var Immutable" }
  ],
  module: {
    loaders: [
      {
        loader: 'babel',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        query: {
          plugins: [
            'transform-runtime',
            'transform-decorators-legacy'
          ],
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      { test: /\.json$/, loader: 'json' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
