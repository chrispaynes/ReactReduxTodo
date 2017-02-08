import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

// finalCreateStore represents a finalized store composed of applied middleware.
let finalCreateStore = compose(
  applyMiddleware(thunk, logger())
)(createStore)

// ADD ADDITIONAL MIDDLEWARE HERE

// Initialize the store.
export default function configureStore(initialState = { todos: [], user: {} }) {
  return finalCreateStore(rootReducer, initialState)
}
