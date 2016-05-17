'use strict';
const path = require('path');

module.exports = {
  debug: true,
  devtool: 'inline-source-map',
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
  output: {
    filename: '[name].bundle.js'
  },
  externals: [
    { react: "var React" },
    { "react-dom": "var ReactDOM" },
    { "immutable": "var Immutable" }
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
