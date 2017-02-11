import React, { Component } from 'react'

class TodoItem extends Component {

  handleComplete() {
    this.props.actions.completeTodo(this.props.todo.id)
  }

  handleDelete() {
    this.props.actions.deleteTodo(this.props.todo.id)
  }

  render() {
    return (
      <li className="todoItem">{this.props.todo.text}
        <button onClick={this.handleComplete.bind(this)}>Mark as completed</button>
        <button onClick={this.handleDelete.bind(this)}>Delete Todo</button>
      </li>
    );
  }

}

export default TodoItem;
