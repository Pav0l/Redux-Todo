import uuid from 'uuid';

export const ADD_TODO = 'ADD_TODO';
export const COMPLETE = 'COMPLETE';
export const DELETE = 'DELETE';

export const addTodo = (inputValue) => {
  return ({ 
    type: ADD_TODO,
    id: uuid(),
    value: inputValue,
    completed: false,
  });
}

export const complete = (id) => {
  return ({
    type: DELETE,
    id
  });
}
