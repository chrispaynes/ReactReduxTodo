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

  // Loaders receive query parameters via a query string (just like in the web).
  // Webpack appends the query string to the loader with ?. i.e. url-loader?mimetype=image/png.
  module: {
    loaders: [
      {
        // JavaScript files
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        // query tells babel what to do with each js file during transpiling.
        // 'transform-runtime' namespaces helpers and builtins,
        // automatically polyfilling them code to prevent global namespace pollution.
        // 'transform-runtime' plugin tells babel to require the runtime
        // instead of inlining it.
        query: {
          presets: ['react', 'es2015', 'react-hmre'],
          plugins: ['transform-runtime'],
          cacheDirectory: true
        }
      },
      {
        // HTML files
        test: /\.html$/,
        loader: 'raw-loader'
      },
      {
        // CSS files
        test: /client\css\/\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    inline: true,
    stats: "errors-only"
  }

}
