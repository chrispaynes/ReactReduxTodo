function getId(todos) {
  return todos.reduce((maxId, todo) => {
    return Math.max(todo.id, maxId);
  }, -1) + 1;
}

export default function todos(todos = [], action) {
  switch (action.type) {
    // 'ADD_TODO' merges a new todo with a spread of todos currently in the store.
    // A new todo is assigned a unique ID so that future todos don't share IDs
    case 'ADD_TODO':
      return [{
        text: action.text,
        completed: false,
        id: getId(todos)
                }, ...todos];

      // COMPLETE_TODO returns completed todo if the todo.id matches, if not then return the current todo.
    case 'COMPLETE_TODO':
      return todos.map((todo) => {
        return todo.id === action.id ?
          Object.assign({}, todo, { completed: !todo.completed }) : todo;
      })

      // 'DELETE_TODO' filters the deleted todo and returns all unfiltered todos.
    case 'DELETE_TODO':
      return todos.filter((todo) => {
        return todo.id !== action.id;
      })

    default:
      return todos;
  }
}