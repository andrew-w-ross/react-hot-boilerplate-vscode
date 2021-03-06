var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-inline-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    devtoolModuleFilenameTemplate: function(info){
      if(info.absoluteResourcePath.charAt(0) === '/') {
        return "file://"+info.absoluteResourcePath;
      } else {
        return "file:///"+info.absoluteResourcePath;
      }      
    },
    devtoolFallbackModuleFilenameTemplate: function(info){
      if(info.absoluteResourcePath.charAt(0) === '/') {
        return "file://"+info.absoluteResourcePath+'?'+info.hash;
      } else {
        return "file:///"+info.absoluteResourcePath+'?'+info.hash;
      }      
    },
    path: __dirname,
    filename: 'bundle.js',
    publicPath: 'http://localhost:3000/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html', // Load a custom template 
      inject: 'body' // Inject all scripts into the body 
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};
