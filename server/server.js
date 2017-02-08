/*
run server on command line with "$node server/server.js"

Use "$npm run serve" to run npm script file
Nodemon watches root folder for updates
in package.json: add "--ignore components" flag to scripts { "serve": "nodemon server/server.js --ignore components" }
this allows nodemon to watch for server changes but not components
*/

/*
  webpack-hot-middleware:
    Adds hot reloading into an existing server without webpack-dev-server.

  webpackDevMiddleware:
    Compiles and servers assets in-memory.

  compiler:
    uses webpack to use properties from webpack.config.js
*/

var express = require('express');
var path = require('path');
var config = require('../webpack.config.js');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var app = express();
var compiler = webpack(config);
var port = 3000;

// EXPRESS JS MIDDLEWARE
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.use(express.static('./dist'));

app.use('/', function(req, res) {
  res.sendFile(path.resolve('client/index.html'));
});

// SERVER LISTENING
app.listen(port, function(error) {
  if (error) throw error;
  console.log("Express server listening on port", port);
});
