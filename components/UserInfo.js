import React, { Component } from 'react'

class UserInfo extends Component {

  handleNewId() {
    //dispatch action from action.js
    this.props.actions.createNewUserId()
  }

  handleNewIdIfOdd() {
    //dispatch action from action.js
    this.props.actions.createNewUserIdIfOdd()
  }

  handleNewIdAsync() {
    //dispatch action from action.js
    this.props.actions.createNewUserIdAsync()
  }

  render() {
    return ( < div >
      < li >
      < div > Username: { this.props.user.username } < /div> < div > ID: { this.props.user.id } < /div > < button onClick = { this.handleNewId.bind(this) } > Update with new ID < /button> < button onClick = { this.handleNewIdIfOdd.bind(this) } > Update with new ID
      if ID is odd number < /button> < button onClick = { this.handleNewIdAsync.bind(this) } > Update with new ID Asynchronously < /button > < /li> < /div >
    )
  }

}

export default UserInfo
