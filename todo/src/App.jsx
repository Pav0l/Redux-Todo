import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, complete } from './components/actions/actions';
import styled from 'styled-components';
import uuid from 'uuid';
// import TodoItem from './components/TodoItem';


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
              <StyledLi
                key={uuid()}
                onClick={() => this.props.complete(task.id)}
                completed={task.completed}
              >
              {task.value}
              </StyledLi>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default connect(st => st, { addTodo, complete })(App);


const StyledLi = styled.li`
  color: ${props => props.completed === true ? "green" : "blue"};  
  :hover {
    cursor: pointer;
  }
`;