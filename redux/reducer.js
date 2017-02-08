//the reducers code can become very large. It is wise to separate the reducers and then combine them into a single file using the redux library's "combine reducers". the combine file is then passed into the store config. the state tree is later split into parts and each specific part will grab a specific reducer assigned to it. The reducers verify that they have a switch case statement action that they can handle. After the action is handled they will return their data to the state tree. the
//main reducer takes the sub-reducers change and puts that into the main state tree. put the reducers in a reducer folder with the redux folder
//when the reducers are separate, the reducer does not need to be passed the whole state tree. Instead it receives a only the portions of the tree it needs.


//this file tells the app what to do when an action occurs
//handle the action based on the action.type and perform a reduction based on a certain case
//always list a default case at the of switch statement. default returns state
//always return state incase the reducer function is not involved in reducing any part of the function
//The Object.assign() method copies an enumerable objects' property values from 1 or more source objects to a target object and returns a merged target object.
//Object.assign(target, ...sources)
//in this instance we return a new empty object {} and new todo object {}
//Spread Operator allows expressions to expand when multiple arguments (for function calls) or multiple elements (for array literals) or multiple variables (for destructuring assignment) are expected.
//Arrow Function provides shorter syntax for an anonmous function expression.
// => lexically binds the this value (does not bind its own this, arguments, super, or new.target).
// (param1, param2, …, paramN) => expression
//make sure to return something on the reducer switch statement or it will run down to default statement
function getId(state) {
  return state.todos.reduce((maxId, todo) => {
    return Math.max(todo.id, maxId) //loops through current Ids and returns the max Id minus 1, and adds 1 to the new Id
  }, -1) + 1
}

//the reducers code can become very large. It is wise to separate the reducers and then combine them into a single file using the redux library's "combine reducers". the combine file is then passed into the store config. the state tree is later split into parts and each specific part will grab a specific reducer assigned to it. The reducers verify that they have a switch case statement action that they can handle. After the action is handled they will return their data to the state tree. the
//main reducer takes the sub-reducers change and puts that into the main state tree. put the reducers in a reducer folder with the redux folder
let reducer = function(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      console.log('made to action.type switch statement')
      return Object.assign({}, state, {
        todos: [{
            //add new todo info and merge it with source todos. it keeps the previous todos property but it updates/overrides its properties
            text: action.text,
            completed: false,
            id: getId(state) //knowing state allows this helper FN know which unique Id is next/available
                }, ...state.todos] //uses spread operator to spread the remaining todo listings and appends into the array
      })

      //use ternary operator to return todo if the todo.id matches, if not then return the current todo
    case 'COMPLETE_TODO':
      console.log('a todo has been completed with the action.type')
      return Object.assign({}, state, {
        todos: state.todos.map((todo) => {
          return todo.id === action.id ?
            Object.assign({}, todo, { completed: !todo.completed }) : todo
        })
      })

      //filter out the deleted todo if the todo.id is not the action.id. this removes the deleted todo from the newly created array.
    case 'DELETE_TODO':
      console.log('a todo has been deleted with the action.type')
      return Object.assign({}, state, {
        todos: state.todos.filter((todo) => {
          return todo.id !== action.id
        })
      })

    case 'CREATE_USER_ID':
      console.log('a user ID has been created with a reducer action type')
      return Object.assign({}, state, {
        user: {
          username: state.user.username,
          id: action.id
        }
      })

    default:
      return state;
  }
}

export default reducer
