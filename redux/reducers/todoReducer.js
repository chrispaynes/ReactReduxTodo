function getId(todos){
    return todos.reduce((maxId, todo) =>{
        return Math.max(todo.id, maxId)  
    }, -1) + 1
}

//the reducers code can become very large. It is wise to separate the reducers and then combine them into a single file using the redux library's "combine reducers". the combine file is then passed into the store config. the state tree is later split into parts and each specific part will grab a specific reducer assigned to it. The reducers verify that they have a switch case statement action that they can handle. After the action is handled they will return their data to the state tree. the
//main reducer takes the sub-reducers change and puts that into the main state tree. put the reducers in a reducer folder with the redux folder
//when the reducers are separate, the reducer does not need to be passed the whole state tree. Instead it receives a only the portions of the tree it needs.
let todoReducer = function(todos = [], action){
    switch(action.type){
        case 'ADD_TODO':
            console.log('made to action.type switch statement')
            //since we're no longer return the state object, we can return the array of todos
            return [{
                    //add new todo info and merge it with source todos. it keeps the previous todos property but it updates/overrides its properties
                    text: action.text,
                    completed: false,
                    id: getId(todos)    //knowing state allows this helper FN know which unique Id is next/available
                }, ...todos]  //uses spread operator to spread the remaining todo listings and appends into the array
        
        //use ternary operator to return todo if the todo.id matches, if not then return the current todo
        case 'COMPLETE_TODO':
            console.log('a todo has been completed with the action.type')
            return todos.map((todo) => {
                    return todo.id === action.id ?
                        Object.assign({}, todo, {completed: !todo.completed}) : todo
                })
        
        //filter out the deleted todo if the todo.id is not the action.id. this removes the deleted todo from the newly created array.
        case 'DELETE_TODO':
            console.log('a todo has been deleted with the action.type')
            return todos.filter((todo) => {
                    return todo.id !== action.id    
                })

        default:
            return todos;
    }
}

export default todoReducer
