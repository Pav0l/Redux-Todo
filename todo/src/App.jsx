import React, { Component } from 'react';
import TodoItem from './components/TodoItem';


class App extends Component {
  render() {
    return (
      <div>
        <h1>Redux-list</h1>
        <form>
          <input
            type="text"
            placeholder="Enter to do item"
          >
          </input>
          <button>Button</button>
        </form>

        <ul>
          <TodoItem />
        </ul>
      </div>
    );
  }
}

export default App;
