const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  // eval: Each module is executed with eval and //@ sourceURL.
  // eval-source-map: Each module is executed with eval and a SourceMap is added as DataUrl to the eval
  devtool: 'cheap-eval-source-map',
  context: path.join(__dirname),
  entry: {
    app: ['webpack-hot-middleware/client', './client/client.js']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    // outputs custom bundle for each named entry point 
    filename: '[name].bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("bundle.css"),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, "client", 'index.html'),
      inject: true,
      hash: true
    })
  ],

  // Loaders receive query parameters via a query string (just like in the web).
  // Webpack appends the query string to the loader with ?. i.e. url-loader?mimetype=image/png.
  module: {
    loaders: [
      {
        // JavaScript Loader
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
        // HTML Loader
        test: /\.html$/,
        loader: 'raw-loader'
      },
      {
        // CSS Loader
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
        options: {
          minimize: true
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    inline: true,
    stats: {
      colors: true,
      reasons: true,
      chunks: false
    }
  }

}
