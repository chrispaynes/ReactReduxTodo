import React, { Component } from 'react'
import StatusButton from './StatusButton'

class TodoItem extends Component {

  handleDelete() {
    this.props.actions.deleteTodo(this.props.todo.id)
  }

  render() {
    return (
      <li className="todoItem">{this.props.todo.text}
        <span className="todoItemAuthor">Added By: {this.props.todo.author.name}</span>
        <span className="todoItemTimestamp">Created at: {this.props.todo.timestamp}</span>
        <StatusButton todo={this.props.todo} actions={this.props.actions}/>
        <button onClick={this.handleDelete.bind(this)}>Delete Todo</button>
      </li>
    );
  }

}

export default TodoItem;
