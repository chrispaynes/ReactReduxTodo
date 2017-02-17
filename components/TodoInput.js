//create the HTML-like module with the same name as the component name and filename
//handleChange is a method of the TextInput class component, bind(this) adds the global object to handleChange FN, otherwise it is undefined
import React, { Component } from 'react';
import moment from 'moment';


class TodoInput extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      inputTitle: "",
      inputBody: ""
    }
  }

  // handleChange listens for and detects text input box changes.
  handleTitleChange(event) {
    this.setState({
      inputTitle: event.target.value
    })
  }

  handleBodyChange(event) {
    this.setState({
      inputBody: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addTodo(this.state.inputTitle, this.state.inputBody,
      moment().format('MMMM Do YYYY, h:mm:ss a'), this.props.user);
    this.state.inputTitle = "";
    this.state.inputBody = "";
  }

  // pass in this.state.input.text as a pseudo attribute to the dumb TextDisplay component
  // this creates a this.props.text property for TextDisplay component
  // to allow user to hit return and submit new todo, remove the button and add input element
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input className="todoInputInput" type="text" defaultValue="" placeholder="Todo Title" value={this.state.inputTitle}
            onChange={this.handleTitleChange.bind(this)}></input>
          <textarea className="todoInputTextArea" value={this.state.inputBody} onChange={this.handleBodyChange.bind(this)}></textarea>
          <input type="submit" text="submit"></input>
        </form>
      </div>
    );
  }

}

export default TodoInput;
