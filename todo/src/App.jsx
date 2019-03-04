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
    if (e.target.firstChild.value === '') {
      alert('You can not add empty item to the list.')
    } else {
      this.props.addTodo(e.target.firstChild.value);
    }
    // get input value from Refs
    e.target.firstChild.value = '';
  }

  render() {
    return (
      <AppWrapper>
        <ListHeader>Redux-list</ListHeader>
        <nav>
          <a href="#">Live</a>
          <a href="#">Done</a>
          <a href="#">Archived</a>
        </nav>
        <Form onSubmit={this.submitHandler}>
          <InputField
            type="text"
            placeholder="Enter to do item"
          >
          </InputField>
          <AddBtn type="submit">+</AddBtn>
        </Form>

        <ul>
          {
            this.props.todos.map(task => (
              <div key={task.id}>
                <StyledLi
                  completed={task.completed}
                  >
                  <CompleteBtn onClick={() => this.props.complete(task.id)}>✓</CompleteBtn>
                  {task.value}                  
                  <DeleteBtn onClick={() => this.props.deleteItem(task.id)}>X</DeleteBtn>
                </StyledLi>
                
              </div>
            ))
          }
        </ul>
      </AppWrapper>
    );
  }
}

// export App into HOC (connect), which will give it state and two props (addTodo, complete)
export default connect(st => st, { addTodo, complete, deleteItem })(App);

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  max-width: 400px;
  border: 1px solid black;
  border-radius: 20px;
  text-align: center;

  nav {
    display: flex;
    justify-content: start;
    margin-left: 1rem;

    a {
      text-decoration: none;
      margin: 0.5rem;
      padding: 0 0.7rem 0.3rem;
      color: grey;
      text-transform: capitalize;
      font-weight: 700;
      :first-child {
        color: rgb(0, 211, 237);
        border-bottom: 4px solid rgb(0, 211, 237);
        }
    }
  }

  ul {
    padding: 0;
  }
`;

const ListHeader = styled.h1`
  margin: 1rem auto;
  color: grey;
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
`;

const InputField = styled.input`
  padding: 1rem 1.5rem;
  border: none;
  font-size: 1.2rem;
  opacity: 0.5;
`;

const AddBtn = styled.button`
  color: white;
  font-weight: 700;
  background-color: rgb(0, 211, 237);
  border-radius: 50%;
  width: 45px;
  height: 45px;
  font-size: 1.5rem;
  border: 1px solid rgb(0, 211, 237);
  margin: auto 1rem;
  cursor: pointer;
  opacity: 0.5;
  text-align: center;
  
  @keyframes rotate-center {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  :hover {
    animation: rotate-center 0.6s linear both;
  }
`;

const StyledLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.completed === true ? "green" : "rgb(102, 102, 102)"};
  list-style-type: none;
  font-size: 1.2rem;
  padding: 1rem;
  text-align: center;
  font-weight: 700;
  margin: 0 1rem;
  :hover {
    cursor: pointer;
  }
`;

const CompleteBtn = styled.button`
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  border: 1px solid grey;
  margin: auto 1rem auto 0;

  @keyframes pulse {
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.2, 1.2, 1.2);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}

  :hover {
    animation: pulse 0.6s linear both;
  }
`;

const DeleteBtn = styled.button`
  cursor: pointer;
  opacity: 0.7;
  margin: auto 0 auto 1rem;;
  background-color: rgb(255, 191, 191);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid red;
  color: white;
  font-weight: 700;

  @keyframes shake {
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-5px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(5px, 0, 0);
  }
  }

  :hover {
    animation: shake 0.4s linear both;
  }
`;