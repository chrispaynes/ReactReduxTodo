# react-todo-list

Work in progress. This is a simple todo list app built with React, Redux and Webpack. This app is based off the app on [Kurt Weiberth's React + Redux + Webpack YouTube tutorial](https://www.youtube.com/playlist?list=PLQDnxXqV213JJFtDaG0aE9vqvp6Wm7nBg).

## Features
* Babel ES6/ES2015 Transpiler
* ExpressJS
* Hot Module Reloading
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
Start server via command line using the NPM script from package.json. Nodemon will watch the root folder for updated files.

`$ npm run serve` or `$node server/server.js`

```
[nodemon] 1.9.2
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server/server.js`
Express server listening on port 3000
webpack built 7bed1f2949448b466ee9 in 5075ms

```

Visit `http://localhost:3000` to use the app.
