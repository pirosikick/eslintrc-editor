'use strict';

module.exports = {
  context: __dirname + '/src',
  entry: {
    client: './client',
    mock: './mock'
  },
  output: {
    path: __dirname + "/.tmp/scripts",
    filename: "[name].bundle.js"
  },
  externals: [
    { react: "var React" }
  ],
  devtool: 'inline-source-map',
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader?optional=runtime&stage=0' },
      { test: /\.md$/, exclude: /node_modules/, loader: 'babel!md2jsx' },
      { test: /\.json$/, loader: 'json' }
    ]
  }
};
