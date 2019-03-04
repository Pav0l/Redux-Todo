import { ADD_TODO, COMPLETE } from '../actions/actions';

const initState = {
  todos: [],
}

export default function rootReducer(state = initState, action) {
  switch (action.type) {
    case ADD_TODO:
      return ({
        todos: [...state.todos, {id: action.id, value: action.value, completed: action.completed}],
      });
    case COMPLETE:
      return ({
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )})
    default:
      return state;
  }
}