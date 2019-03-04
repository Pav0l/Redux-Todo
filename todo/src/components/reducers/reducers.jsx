import { ADD_TODO, COMPLETE } from '../actions/actions';

const initState = {
  todos: [],
}

export default function todoList(state = initState, action) {
  switch (action.type) {
    case ADD_TODO:
      return ({
        todos: [...state.todos, {value: action.value, completed: action.completed}],
      });
    case COMPLETE:
      return ({
        todos: [...state.todos, {value: action.value, completed: !action.completed}],
      });  
    default:
      return state;
  }
}