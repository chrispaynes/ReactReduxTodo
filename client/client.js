/*
  CLIENT.JS

  Defines component anchored to "app" id within index.html
  Serves as application entry point, where the store is initialized
  The store is passed down state as properties
  Container components need access to the Redux store so they can subscribe to it.
  Use the ReactRedux <Provider> component to make the store available to all container components.
  You only need to use it once when you render the root component.
  Wrap the provider around the app and use the store object as an attribute/property.
*/

/*
  Provider: connects store to components that need to know about store,
  wraps around app, and gets store as a property.
  Eventually the app should be wrapped in the connected app which is
  surrounded/wrapped by the provider.
  The innermost app should have access to the states this.props
*/
import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
import configureStore from '../redux/store'
import { Provider } from 'react-redux'
import moment from 'moment';
import actions from '../redux/actions';
require("./css/main.css");

let initialState = {
  todos: [{
    id: 0,
    completed: false,
    text: 'Initial todo.text',
    timestamp: moment().format('MMMM Do YYYY, h:mm:ss a'),
    author: {
      name: 'Initial author.name',
      id: 0
    },
    }],
  user: actions.createNewUserId()
}

// store represents the stored configured with an initial preloaded state.
let store = configureStore(initialState)

// render mounts the Provider with store around the application.
render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);