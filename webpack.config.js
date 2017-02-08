//optimize.OccurenceOrderPlugin
//Assign the module and chunk ids by occurrence count. Ids used often get lower/shorter ids. This make ids predictable, reduces file size.
//HotModuleReplacementPlug
//Enables Hot Module Replacement. Generates Hot Update Record Chunks 
//NoErrorsPlugin
//skips compiling if there are errors 
//react-hmre allows babel to talk to webpack
var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map', //for production env, displays console error linking to source find instead of bundle.js
  entry: [
            'webpack-hot-middleware/client', //webpack needs to know another entry point
            './client/client.js'
           ], //entry point for the app
  output: {
    path: '/dist',
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
       new webpack.optimize.OccurenceOrderPlugin(),
       new webpack.HotModuleReplacementPlugin(),
       new webpack.NoErrorsPlugin()
    ],
  module: { //define tasks for webpack to perform while bundling
    loaders: [ //load a file to perform a task with it, each file is an obj. with a test property using regex
      { //if there is a file with .js at the end, perform the loader on it
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: { //same as setting up a babelrc file on the app root, query tells babel what to do with each js file
          presets: ['react', 'es2015', 'react-hmre']
        }
            }
        ]

  }
}

//via command line: "$webpack --config webpack.config.js" grabs this webpack.config file for manually creating bundle.js
//after bundling, serve via "$npm run serve"
//webpack serves files and mimics a bundle.js file.
//componenet files are monitored but do not trigger a bundle.js update.
//webpack will "Hot Reload" by mimicing the new bundle.js
