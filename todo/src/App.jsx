import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, NavLink, withRouter } from 'react-router-dom';
import { addTodo, complete, deleteItem } from './components/actions/actions';
import styled from 'styled-components';
import ListItem from './components/ListItem';


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
    e.target.firstChild.value = '';
  }

  render() {
    const liveList = this.props.todos.filter(task => task.completed === 'LIVE');
    const doneList = this.props.todos.filter(task => task.completed === 'DONE');
    const delList = this.props.todos.filter(task => task.completed === 'ARCHIVED');

    return (
      <AppWrapper>
        <ListHeader>Redux-list</ListHeader>
        <nav>
          <NavLink exact to="/">Live</NavLink>
          <NavLink to="/done">Done</NavLink>
          <NavLink to="/archive">Archived</NavLink>
        </nav>
        <Form onSubmit={this.submitHandler}>
          <InputField
            type="text"
            placeholder="Enter to do item"
          >
          </InputField>
          <AddBtn type="submit">+</AddBtn>
        </Form>

        <Route
          exact
          path="/"
          render={props => (
            <ListItem
              {...props}
              list={liveList}
              complete={this.props.complete}
              deleteItem={this.props.deleteItem}
            />
          )}
        />

        <Route
          path="/done"
          render={props => (
            <ListItem
            {...props}
            list={doneList}
            complete={this.props.complete}
            deleteItem={this.props.deleteItem}
            />
          )}
        />

        <Route
          path="/archive"
          render={props => (
            <ListItem
            {...props}
            list={delList}
            complete={this.props.complete}
            deleteItem={this.props.deleteItem}
            />
          )}
        />

      </AppWrapper>
    );
  }
}

// export App into HOC (connect), which will give it state and two props (addTodo, complete)
// withRouter removes blocked updates of the DOM when you click on NavLink (without it, the list would not re-render on link click)
export default withRouter(connect(st => st, { addTodo, complete, deleteItem })(App));

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

      .active {
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
