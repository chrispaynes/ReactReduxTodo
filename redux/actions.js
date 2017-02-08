//this file defines the actions as pure functions.
//type: value is in caps, separated by underscore
//every action has a type
//type tells reducers how to handle the action
//todo is built from the text string value of "text" property
//completed will be set to false
//ID will be set to the next number available
//action is an object that gets return
//the payload is additional info that helps the action get performed
//components call this FN to activate an event
//passed in text var is text typed in from input field
//this actions are called as case statements in the reducer.js file

let actions = {
  addTodo: function(text) {
    return {
      type: 'ADD_TODO',
      text: text
    }
  },

  //use keyID to bind a specific todo item to this method
  completeTodo: function(id) {
    return {
      type: 'COMPLETE_TODO',
      id: id
    }
  },

  deleteTodo: function(id) {
    return {
      type: 'DELETE_TODO',
      id: id
    }
  },

  createNewUserId: function() {
    // do async server call
    // onSuccess: dispatch action
    return {
      type: 'CREATE_USER_ID',
      id: Math.floor(Math.random() * 100)
    }
  },

  createNewUserIdIfOdd: function() {
    return (dispatch, getState) => {
      const { user } = getState()
      if (user.id % 2 === 0) {
        return
      }
      dispatch(actions.createNewUserId())
    }
  },

  createNewUserIdAsync: function() {
    return (dispatch) => {
      setTimeout(() => {
          dispatch(actions.createNewUserId())
        }, 3000) //setTimeout() makes an async call. it takes a FN as 1st param, 2nd param is wait time
    }
  }

}

export default actions
