import { ADD_TODO, COMPLETE, DELETE } from '../actions/actions';

const initState = {
  todos: [],
}

export default function rootReducer(state = initState, action) {
  // Define what should happend with the DOM, when an action is called
  switch (action.type) {
    case ADD_TODO:
      return ({
        todos: [...state.todos, {id: action.id, value: action.value, completed: action.completed}],
      });
    case COMPLETE:
      return ({
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )});
    case DELETE:
      return ({
        todos: state.todos.filter(todo => todo.id !== action.id)
      });
    default:
      return state;
  }
}