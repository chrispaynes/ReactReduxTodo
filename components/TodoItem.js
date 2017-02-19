import React, { Component } from 'react';
import moment from 'moment';

class TodoItem extends Component {

  constructor(props, context) {

    super(props, context)

    this.state = {
      btnColor: { color: "black" },
      btnCaption: "Mark Complete",
      strikethrough: {},
      todoOpacity: {},
      todoBody: this.props.todo.body
    }
  };

  handleDelete() {
    this.props.actions.deleteTodo(this.props.todo.id)
  }

  handleEdit() {
    console.table(this.state.todoBody)
    this.setState({
      todoBody: this.decorateProp(this.state.todoBody, "textarea", { onBlur: this.handleBodyChange.bind(this) })
    });
  }

  handleComplete(event) {
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

  handleBodyChange(event) {
    event.preventDefault();
    this.handleSubmit(event.target.value);
    this.setState({
      todoBody: event.target.value
    })
  }

  handleSubmit(editedTodo) {
    this.props.actions.editTodo(this.props.todo.id, editedTodo, moment().format('MMMM Do YYYY, h:mm:ss a'));
  }

  toggleCompletion() {
    return this.props.todo.completed ? this.handleUndoComplete() : this.handleComplete();
  }

  // todoTitle returns "Untitled" if a todo does not have a title.
  todoTitle() {
    return this.props.todo.title === "" ? "Untitled" : this.props.todo.title;
  }

  // decorateProp decorates properties with an HTML element.
  decorateProp(todoBody, decorator, props) {
    return React.createElement(decorator, props, todoBody);
  }

  render() {
    return (
      <li className="todoItem">
        <div style={this.state.todoOpacity}> 
          <h1 style={this.state.strikethrough}>{this.todoTitle()}</h1>
          {this.state.todoBody}
          <div className="todoItemAuthor">Added By: {this.props.todo.author.name}</div>
          <div className="todoItemTimestamp">Created at: {this.props.todo.timestamp}</div>
          <div className="todoItemTimestamp">Last Edited at: {this.props.todo.editTimestamp}</div>
          <button onClick={this.toggleCompletion.bind(this)} style={this.state.btnColor}>{this.state.btnCaption}</button>
          <button onClick={this.handleEdit.bind(this)}>Edit Todo</button>
          <button onClick={this.handleDelete.bind(this)}>Delete Todo</button>
        </div>
      </li>
    );
  }

}
export default TodoItem;
