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

import React, { Component, PropTypes} from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'
import UserInfo from './UserInfo'

class App extends Component {
    constructor(props, context) {

    super(props, context)
    this.state = {
      todos: this.props.todos,
      user: {
        name: this.props.user.name,
        id: this.props.user.id
      }
    }
};

  render() {
    const props = this.props;
    const { store } = this.context;
    const state = store.getState();

    store.subscribe(() => {
      // When state will be updated(in our case, when items will be fetched), we will update local component state and force component to rerender with new data.
      this.setState({
        todos: store.getState().todos,
        user: {
          name: store.getState().user.name,
          id: store.getState().user.id
        }
      });
    });
    
    return (
      <div>
        <h1 className="appTitle">Todo List</h1>
        <hr className="appHR"></hr>
        <UserInfo user={state.user} actions={this.props.actions}/>
        <TodoInput addTodo={this.props.actions.addTodo} user={state.user}/>
        <TodoList actions={this.props.actions} todos={state.todos}/>
      </div>
    );
  }
}

// mapStateToProps collects and exports the state to the connected app.
function mapStateToProps(state, ownProps = {}) {
  return {todos: state.todos, user: state.user};
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

// App.contextTypes provides App with access to the Provider's store.
App.contextTypes = {
  store: React.PropTypes.object
}

// App.PropTypes exports a range of validators to ensure received data is valid.
App.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
      user: React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    })
  }).isRequired).isRequired,
  user: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  })
}

/*
  Exports and provides access to the connected app component.
  Also, maps the Dispatch as a component property so each component can inherit it.
*/
export default connect(mapStateToProps, mapDispatchToProps)(App);
