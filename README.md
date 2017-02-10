# react-todo-list

Work in progress. This is a simple todo list app built with React, Redux and Webpack. This app is based off the app on [Kurt Weiberth's React + Redux + Webpack YouTube tutorial](https://www.youtube.com/playlist?list=PLQDnxXqV213JJFtDaG0aE9vqvp6Wm7nBg).

## Features
* Babel ES6/ES2015 Transpiler
* ExpressJS
* Hot Module Reloading
* Node Scripts
* React
* Redux
* Thunks
* Webpack

## Installation
Clone the repo, install the node_modules and install Nodemon monitoring utility globally on your machine.
```
$ git clone https://github.com/chrispaynes/react_redux_todo.git
$ cd ./react_redux_todo/
$ npm install
$ npm install -g nodemon
```

## Usage
To start the app server use an NPM script from package.json.

#### Run using vanilla Webpack
```
$ cd ./react_redux_todo/
$ npm start
...

> react-todo-list@X.X.X start /ReactReduxTodo
> webpack --progress --colors --watch

Hash: 6f79ac0ffbf6b72aef6a
Version: webpack 1.14.0
Time: XXXXms
                           Asset       Size  Chunks             Chunk Names
app6f79ac0ffbf6b72aef6abundle.js    2.71 MB       0  [emitted]  app
                      index.html  255 bytes          [emitted]
   [0] multi app 40 bytes {0} [built]

```
#### Run using Webpack-Dev-Server
Nodemon will monitor the root folder and automatically restart the server.

```
$ npm run webpk-serve

> react-todo-list@1.0.0 webpk-serve /Users/Admin/Documents/GITHUB/ReactReduxTodo
> webpack-dev-server --ignore components --inline --hot --progress --colors

70% 1/1 build moduleshttp://localhost:8080/
webpack result is served from /
content is served from /ReactReduxTodo
Hash: a42ff67c424cde8c1dd7
Version: webpack 1.13.1
Time: 11235ms
                           Asset       Size  Chunks             Chunk Names
appa42ff67c424cde8c1dd7bundle.js    3.35 MB       0  [emitted]  app
                      index.html  264 bytes          [emitted]
chunk    {0} appa42ff67c424cde8c1dd7bundle.js (app) 1.19 MB [rendered]
```

Visit `http://localhost:8080` to use the app.


#### Run using Nodemon
Nodemon will monitor the root folder and automatically restart the server when a file changes.

`$ npm run nodemon-serve`

```
[nodemon] 1.9.2
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server/server.js`
Express server listening on port 3000
webpack built 7bed1f2949448b466ee9 in 5075ms

```

Visit `http://localhost:3000` to use the app.


#### Run using Express JS Server
```
$ node server/server.js
Express server listening on port 3000
webpack built 6f79ac0ffbf6b72aef6a in 9928ms
```

Visit `http://localhost:3000` to use the app.
