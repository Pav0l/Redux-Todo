import { ADD_TODO, COMPLETE, DELETE } from '../actions/actions';

const initState = {
  todos: JSON.parse(localStorage.getItem('taskList')) || [],
}

export default function rootReducer(state = initState, action) {
  // Define what should happend with the DOM, when an action is called
  switch (action.type) {
    case ADD_TODO:
      return ({
        todos: [...state.todos, {id: action.payload.id, value: action.payload.value, completed: action.payload.completed}],
      });
    case COMPLETE:
      return ({
        todos: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, completed: 'DONE' } : todo
      )});
    case DELETE:
      return ({
        todos: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, completed: 'ARCHIVED' } : todo
      )});
    default:
      return state;
  }
}