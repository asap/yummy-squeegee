var webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.less$/,
        loader: 'style!css?modules!less'
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
