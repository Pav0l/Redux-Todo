import { ADD_TODO, COMPLETE } from '../actions/actions';

const initState = {
  todos: [],
}

export default function todoList(state = initState, action) {
  switch (action.type) {
    case ADD_TODO:
      return ({
        todos: [...state.todos, {id: action.id, value: action.value, completed: action.completed}],
      });
    case COMPLETE:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
    default:
      return state;
  }
}