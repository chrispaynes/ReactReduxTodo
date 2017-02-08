# ReactReduxTodo

Work in progress. This is a simple todo list app built with React, Redux and Webpack. This app is based off the app on [Kurt Weiberth's React + Redux + Webpack YouTube tutorial](https://www.youtube.com/playlist?list=PLQDnxXqV213JJFtDaG0aE9vqvp6Wm7nBg).

/*
run server on command line with "$node server/server.js"

Use "$npm run serve" to run npm script file
Nodemon watches root folder for updates
in package.json: add "--ignore components" flag to scripts { "serve": "nodemon server/server.js --ignore components" }
this allows nodemon to watch for server changes but not components
*/

##Installation

##Usage
* Start server via command line. Nodemon will watch the root folder for updated files.
`$ npm run serve` or `$node server/server.js`

```
[nodemon] 1.9.2
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server/server.js`
Express server listening on port 3000
webpack built 7bed1f2949448b466ee9 in 5075ms

```
 * Visit `http://localhost:3000` to use the app.