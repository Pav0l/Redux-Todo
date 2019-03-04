import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, complete, deleteItem } from './components/actions/actions';
import styled from 'styled-components';


class App extends Component {

  componentDidUpdate() {
    if (this.props.todos !== localStorage.getItem('taskList')) {
      localStorage.removeItem('taskList');
      localStorage.setItem('taskList', JSON.stringify(this.props.todos));
    }
  }

  submitHandler = e => {
    e.preventDefault();
    this.props.addTodo(e.target.firstChild.value);
    e.target.firstChild.value = '';
  }

  render() {
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
              <div key={task.id}>
                <StyledLi
                  completed={task.completed}
                >
                  {task.value} 
                  <span><button onClick={() => this.props.complete(task.id)}>✓</button></span>
                  <span><button onClick={() => this.props.deleteItem(task.id)}>X</button></span>
                </StyledLi>
                
              </div>
            ))
          }
        </ul>
      </div>
    );
  }
}

// export App into HOC (connect), which will give it state and two props (addTodo, complete)
export default connect(st => st, { addTodo, complete, deleteItem })(App);


const StyledLi = styled.li`
  color: ${props => props.completed === true ? "green" : "blue"};
  text-decoration: ${props => props.completed === true ? "line-through" : "none"};
  :hover {
    cursor: pointer;
  }
`;