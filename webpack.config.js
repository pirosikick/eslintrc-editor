'use strict';

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
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader?optional=runtime&stage=0' },
      { test: /\.json$/, loader: 'json' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
