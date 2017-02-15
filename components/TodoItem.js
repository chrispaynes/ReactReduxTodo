import React, { Component } from 'react'

class TodoItem extends Component {

  constructor(props, context) {

    super(props, context)

    this.state = {
      btnColor: { color: "black" },
      btnCaption: "Mark as completed",
      strikethrough: {},
      todoOpacity: {}
    }
  };

  handleDelete() {
    this.props.actions.deleteTodo(this.props.todo.id)
  }

  handleComplete() {
    this.props.actions.completeTodo(this.props.todo.id);
    this.setState({
      btnColor: { color: 'red' },
      strikethrough: { textDecoration: "line-through" },
      todoOpacity: {
        opacity: 0.25,
        color: "#26454c"
      }
    });
  }

  handleUndoComplete() {
    this.props.actions.undoCompleteTodo(this.props.todo.id)
    this.setState({
      btnColor: { color: 'green' },
      strikethrough: { textDecoration: "none" },
      todoOpacity: { opacity: 1 }
    });
  }

  toggleCompletion() {
    return this.props.todo.completed ? this.handleUndoComplete() : this.handleComplete() ;
  }

  render() {
    return (
      <li className="todoItem" style={this.state.todoOpacity}>
        <h1 style={this.state.strikethrough}>{this.props.todo.text}</h1>
        <span className="todoItemAuthor">Added By: {this.props.todo.author.name}</span>
        <span className="todoItemTimestamp">Created at: {this.props.todo.timestamp}</span>
        <button onClick={this.toggleCompletion.bind(this)} style={this.state.btnColor}>{this.state.btnCaption}</button>
        <button onClick={this.handleDelete.bind(this)}>Delete Todo</button>
      </li>
    );
  }

}
export default TodoItem;
