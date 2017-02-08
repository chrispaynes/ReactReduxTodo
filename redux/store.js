//npm i --save redux-logger
// Logger must be last middleware in chain, otherwise it will log thunk and promise, not actual actions (#20).
// logs every action, the previous state, the action and the new state in the console

//npm i --save redux-thunk
//thunk is a FN that wraps an expression to delay its evaluation


import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './reducers' //this grabs the reducers/index.js file
import logger from 'redux-logger'
import thunk from 'redux-thunk'

//redux's compose FN accepts a spread of FNs and returns a final composed function using the given FNs from right to left order
let finalCreateStore = compose( //applies middleware to a finalized version of the store. the normal store named createStore would not have middleware passed in.
  applyMiddleware(thunk, logger()) //optional configure arguments can be passed insider logger()
)(createStore)

//add middleware here

//store configuration needs the reducers and the initialState
//if the initialState is supplied it is passed in as the the value, if it is not supplied a default value of an empty todos array is assigned. 
//if initialState is not supplied, it will default to the assigned value
export default function configureStore(initialState = { todos: [], user: {} }) {
  return finalCreateStore(rootReducer, initialState)
}
