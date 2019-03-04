import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, complete } from './components/actions/actions';
import TodoItem from './components/TodoItem';


class App extends Component {

  submitHandler = e => {
    e.preventDefault();
    this.props.addTodo(e.target.firstChild.value);
    e.target.firstChild.value = '';
  }



  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Redux-list</h1>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            placeholder="Enter to do item"
          >
          </input>
          <button type="submit">Button</button>
        </form>

        <ul>
          {
            this.props.todos.map(task => (
              <TodoItem
                key={task.id}
                value={task.value}
                completed={task.completed}              
              />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default connect(st => st, { addTodo, complete })(App);
