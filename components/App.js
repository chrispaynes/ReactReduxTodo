/*
  ACTIONS: mutations performed by objects.

  REDUCERS: pure function with (state, action) => state signature
    Reducers transforms the state into the next state.
    An app may have more than one reducer.

  STORE: single store with a single root reducing function.

  STATE: immutable primitive, array, object, or Immutable.js data structure.
    State should not mutate the state object.
    Instead it should return a new state object if the state changes.

  connect: listens and gets store changes from the store.
*/

import React, { Component } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'
import UserInfo from './UserInfo'


class App extends Component {
  render() {
    return (
      <div className>
        <h1>Todo List</h1>
        <hr></hr>
        <UserInfo user={this.props.user} actions={this.props.actions}/>
        <TodoInput addTodo={this.props.actions.addTodo} />
        <TodoList actions={this.props.actions} todos={this.props.todos}/>
      </div>
    );
  }
}

// mapStateToProps collects and exports the state to the connected app.
function mapStateToProps(state) {
  return state;
}

/*
  mapDispatchToProps uses Redux's bindActionCreators method to wrap all actions
  from actions.js with the dispatcher. This allows entire App to use
  actions.completeTodo, actions.DeleteTodo, etc...
*/
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

/*
  Exports and provides access to the connected app component.
  Also, maps the Dispatch as a component property so each component can inherit it.
*/
export default connect(mapStateToProps, mapDispatchToProps)(App);
