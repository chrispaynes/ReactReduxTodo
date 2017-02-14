import React, { Component } from 'react';

class StatusButton extends Component {
  // btnColor: this.props.button.color
  constructor(props, context) {

    super(props, context)

    this.state = {
      btnColor: { color: color }
    }
  };


// handleComplete
  handleComplete() {
    console.log("CALLED handleComplete()");
    console.log(this);
    this.props.actions.completeTodo(this.props.todo.id, 'blue' );
    this.state.btnColor = { color: 'blue' }
    // add strikethrough to todo subject line
    // dim the body text so it's less visible
  }


// handleIncomplete
  handleUndoComplete() {
    console.log("CALLED handleUndoComplete()");
    this.props.actions.undoCompleteTodo(this.props.todo.id, 'red')
    this.state.btnColor = { color: 'red' }
    // remove the strikethrough text
    // restore the body text to 100% visibility
  }

  toggleCompletion() {
    console.log("CALLED toggleCompletion()")
    console.log(this);
    return !this.props.todo.completed ? this.handleUndoComplete() :  this.handleComplete() ;
  }

  render() {
    return (
        <button style={this.state.btnColor} onClick={this.toggleCompletion.bind(this)}>Mark as completed</button>
        );
  }

}

export default StatusButton;
