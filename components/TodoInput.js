//create the HTML-like module with the same name as the component name and filename
//handleChange is a method of the TextInput class component, bind(this) adds the global object to handleChange FN, otherwise it is undefined
import React, { Component } from 'react';
import moment from 'moment';


class TodoInput extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      inputText: ""
    }
  }

  // handleChange listens for and detects text input box changes.
  handleChange(event) {
    this.setState({
      inputText: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addTodo(this.state.inputText,
      moment().format('MMMM Do YYYY, h:mm:ss a'), this.props.user);
    this.state.inputText = "";
  }



  // pass in this.state.input.text as a pseudo attribute to the dumb TextDisplay component
  // this creates a this.props.text property for TextDisplay component
  // to allow user to hit return and submit new todo, remove the button and add input element
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input className="todoInputInput" type="text" defaultValue="" placeholder="Todo Title" value={this.state.inputText}
            onChange={this.handleChange.bind(this)}></input>
          <textarea className="todoInputTextArea"></textarea>
          <input type="submit" text="submit"></input>
        </form>
      </div>
    );
  }

}

export default TodoInput;
