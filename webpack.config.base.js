const path = require('path');
const webpack = require('webpack');

module.exports = function get(env) {
  const entry = {
    client: ['./src/client.jsx'],
  };
  const output = {
    path: path.join(__dirname, '.tmp', 'scripts'),
    filename: '[name].bundle.js',
    publicPath: '/scripts/',
  };
  const plugins = [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
  ];

  if (env === 'production') {
    output.path = path.join(__dirname, 'dist', 'scripts');
    output.filename = '[name].bundle.min.js';
    plugins.push(new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false,
      },
      mangle: true,
    }));
  } else { // env === 'development'
    plugins.push(new webpack.NoErrorsPlugin());

    // for HMR
    // const hmrSources = [
    //   'webpack/hot/dev-server',
    //   'webpack-hot-middleware/client',
    // ];
    // config.entry = Object.keys(config.entry).reduce((entry, key) => (
    //   Object.assign(entry, {
    //     [key]: hmrSources.concat(config.entry[key]),
    //   })
    // ), {});
  }

  return {
    devtool: 'source-map',
    entry,
    output,
    module: {
      loaders: [
        {
          loader: 'babel?cacheDirectory',
          test: /\.jsx?$/,
          exclude: /node_modules/,
        },
        {
          loader: 'json',
          test: /\.json$/,
        },
      ],
    },
    plugins,
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      immutable: 'Immutable',
    },
    resolve: {
      extensions: ['', '.js', '.jsx'],
    },
  };
};
