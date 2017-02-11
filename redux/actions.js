/*
actions represents a collection of pure functions that perform actions on data.
Components call these actions to activate events. Each action.type will coordinate
with a reducer event from reducer.js
*/
let actions = {
  addTodo: (text, timestamp) => {
    return {
      type: 'ADD_TODO',
      text: text,
      timestamp: timestamp
    }
  },

  // Adding ID as a property binds the id to the action.
  completeTodo: (id) => {
    return {
      type: 'COMPLETE_TODO',
      id: id
    }
  },

  deleteTodo: (id) => {
    return {
      type: 'DELETE_TODO',
      id: id
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
