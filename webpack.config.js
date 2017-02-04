var path = require('path');
var webpack = require('webpack');

module.exports = {
  devServer: {
    contentBase: './src'
  },
  entry: [
    'babel-polyfill',
    './src/main',
    'webpack-dev-server/client?http://localhost8080'
  ],
  output: {
      publicPath: '/',
      filename: 'main.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
          presets: ["es2015"],
        }
      }
    ]
  },
  debug: true
};
