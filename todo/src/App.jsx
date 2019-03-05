import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { addTodo, complete, deleteItem } from './components/actions/actions';
import styled from 'styled-components';
import ListItem from './components/ListItem';
import NavBar from './components/NavBar';
import Form from './components/Form';


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
        
        <NavBar />

        <Form submitHandler={this.submitHandler} />

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
/* .active className passed down from React Routers NavLink */
      &.active {
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
