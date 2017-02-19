import React, { Component } from 'react'

class TodoItem extends Component {

  constructor(props, context) {

    super(props, context)

    this.state = {
      btnColor: { color: "black" },
      btnCaption: "Mark Complete",
      strikethrough: {},
      todoOpacity: {},
      todoBody: this.decorateProp(this.props.todo.body, "p")
    }
  };

  handleDelete() {
    this.props.actions.deleteTodo(this.props.todo.id)
  }

  handleEdit() {
    this.setState({
      todoBody: this.decorateProp(this.props.todo.body, "textarea")
    })
    this.props.actions.editTodo(this.props.todo.id, this.state.todoBody)
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
    return this.props.todo.completed ? this.handleUndoComplete() : this.handleComplete();
  }

  // todoTitle returns "Untitled" if a todo does not have a title.
  todoTitle() {
    return this.props.todo.title === "" ? "Untitled" : this.props.todo.title;
  }

  // decorateProp decorates properties with an HTML element.
  decorateProp(todoBody, decorator) {
    return React.createElement(decorator, null, todoBody);
  }

  render() {
    return (
      <li className="todoItem">
        <div style={this.state.todoOpacity}> 
          <h1 style={this.state.strikethrough}>{this.todoTitle()}</h1>
          {this.state.todoBody}
          <div className="todoItemAuthor">Added By: {this.props.todo.author.name}</div>
          <span className="todoItemTimestamp">Created at: {this.props.todo.timestamp}</span>
          <button onClick={this.toggleCompletion.bind(this)} style={this.state.btnColor}>{this.state.btnCaption}</button>
          <button onClick={this.handleEdit.bind(this)}>Edit Todo</button>
          <button onClick={this.handleDelete.bind(this)}>Delete Todo</button>
        </div>
      </li>
    );
  }

}
export default TodoItem;
