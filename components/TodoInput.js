//create the HTML-like module with the same name as the component name and filename
//handleChange is a method of the TextInput class component, bind(this) adds the global object to handleChange FN, otherwise it is undefined
import React, { Component } from 'react'

class TodoInput extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      inputText: ""
    }
  }

  // handleChange listens for and detects text input box changes.
  handleChange(event) {
    console.log('changed detected');
    console.log(this);
    console.log(this.state.inputText);
    console.log(event); //creates a SyntheticEvent with a { type: "change" }
    console.log(event.target); //prior to text input change, this value is null
    console.log(event.target.value); //after inputing text, the target has a value.
    this.setState({ //every component has this, it notifies state that there is a change
      inputText: event.target.value //sets the state's, inputText property to match the event.target's value
    })
  }


  handleSubmit(event) {
    console.log("EVENT", event);
    event.preventDefault();
    console.log('submit button clicked');
    this.props.addTodo(this.state.inputText); //this is not part of actions.js so it does not use this.props.actions....
    this.state.inputText = "";
  }

  // pass in this.state.input.text as a pseudo attribute to the dumb TextDisplay component
  // this creates a this.props.text property for TextDisplay component
  // to allow user to hit return and submit new todo, remove the button and add input element
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" defaultValue="" placeholder="type todo here" value={this.state.inputText}
            onChange={this.handleChange.bind(this)}></input>
          <input type="submit" text="submit"></input>
        </form>
      </div>
    );
  }

}

export default TodoInput;
