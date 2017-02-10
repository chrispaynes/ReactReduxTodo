const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  devtool: 'inline-source-map', //inline-source-map displays console errors linked to source files.
  context: path.join(__dirname),
  entry: {
    app: ['webpack-hot-middleware/client', './client/client.js']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    // outputs custom bundle + hash for each entry point 
    filename: '[name][hash]bundle.js'
  },
  plugins: [
       new webpack.optimize.OccurenceOrderPlugin(),
       new webpack.HotModuleReplacementPlugin(),
       new webpack.NoErrorsPlugin(),
       new ExtractTextPlugin("bundle.css"),
       new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, "client", 'index.html'),
      inject: true
    })
    ],

  module: {
    loaders: [
      // Extract JavaScript files
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        // query tells babel what to do with each js file during transpiling.
        query: { presets: ['react', 'es2015', 'react-hmre'] }
            }, {
        test: /\.html$/,
        loader: 'raw-loader'
        },
      {
        // Extract CSS files
        test: /client\css\/\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      }
        ]
  }

}
