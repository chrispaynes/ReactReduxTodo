//create the HTML-like module with the same name as the component name and filename
//handleChange is a method of the TextInput class component, bind(this) adds the global object to handleChange FN, otherwise it is undefined
import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {

  //pass in this.state.input.text as a pseudo attribute to the dumb TextDisplay component
  //this creates a this.props.text property for TextDisplay component
  //map over all todos and return them as li elements with keys and the text from the todo
  //when mapping over elements a key/id must be supplied so react can keep track of each element
  render() {
    return (
      <div>
        <ul className="todoList">{
          this.props.todos.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} actions={this.props.actions}/>
          })
        }</ul>
      </div>
    );
  }

}

export default TodoList;
