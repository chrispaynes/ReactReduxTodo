/*
actions represents a collection of pure functions that perform actions on data.
Components call these actions to activate events. Each action.type will coordinate
with a reducer event from reducer.js
*/
let actions = {
  addTodo: (title, body, timestamp, author) => {
    return {
      type: 'ADD_TODO',
      title: title,
      body: body,
      timestamp: timestamp,
      author: author,
    }
  },

  // Adding ID as a property binds the id to the action.
  completeTodo: (id) => {
    return {
      type: 'COMPLETE_TODO',
      id: id,
    }
  },

  // Adding ID as a property binds the id to the action.
  undoCompleteTodo: (id) => {
    return {
      type: 'UNDO_COMPLETE_TODO',
      id: id,
    }
  },

  deleteTodo: (id) => {
    return {
      type: 'DELETE_TODO',
      id: id
    }
  },

  editTodo: (id, body, editTimestamp) => {
    return {
      type: 'EDIT_TODO',
      id: id,
      body: body,
      editTimestamp: editTimestamp
    }
  },

  createNewUserId: () => {
    let id = Math.floor(Math.random() * 100);
    return {
      type: 'CREATE_USER_ID',
      id: id,
      name: `User${id}`
    }
  },

  createNewUserIdIfOdd: () => {
    return (dispatch, getState) => {
      const { user } = getState()
      if (user.id % 2 === 0) {
        return
      }
      dispatch(actions.createNewUserId())
    }
  },

  // setTimeout() mimics an async call by waiting to call the function.
  createNewUserIdAsync: function() {
    return (dispatch) => {
      setTimeout(() => {
        dispatch(actions.createNewUserId())
      }, 3000)
    }
  }

};

export default actions;
