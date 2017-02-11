import React, { Component } from 'react'

class UserInfo extends Component {
  constructor(props, context) {

    super(props, context)
    this.state = {
      user: {
        name: this.props.user.name,
        id: this.props.user.id
      }
    }
  }

  // handleNewId dispatches createNewUserId() from action.js
  handleNewId() {
    this.props.actions.createNewUserId();
  }

  // handleNewIdIfOdd dispatches createNewUserIdIfOdd() from action.js
  handleNewIdIfOdd() {
    this.props.actions.createNewUserIdIfOdd();
  }

  // handleNewIdAsync dispatches createNewUserIdAsync() from action.js
  handleNewIdAsync() {
    this.props.actions.createNewUserIdAsync();
  }

  render() {
    return (
      <div>
        <li>
          <div>User: {this.props.user.name}</div>
          <div>ID: {this.props.user.id}</div>
          <button onClick={this.handleNewId.bind(this)}>Update with new ID</button>
          <button onClick={this.handleNewIdIfOdd.bind(this)}>Update with new ID
          if ID is odd number </button>
          <button onClick={this.handleNewIdAsync.bind(this)}>Update with new ID Asynchronously</button>
      </li>
    </div>
    )
  }

}

export default UserInfo;
