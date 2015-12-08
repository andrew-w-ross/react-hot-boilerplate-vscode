/* global __dirname */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].min.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      comments: false,
      compressor: {
        warnings: false,
        unused: true,
        drop_console: true
      }
    }),
    new HtmlWebpackPlugin({
      template: './index.html', // Load a custom template 
      inject: 'body' // Inject all scripts into the body 
    })
  ],
  module: {
    preLoaders: [
      {test: /\.js$/, loader: 'eslint', exclude: /node_modules/}
    ],
    loaders: [{
      test: /\.js$/,
      include: path.resolve(__dirname, 'src'),
      loader: 'babel'
    }]
  }
};
