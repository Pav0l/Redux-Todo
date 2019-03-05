import uuid from 'uuid';

export const ADD_TODO = 'ADD_TODO';
export const COMPLETE = 'COMPLETE';
export const DELETE = 'DELETE';

// Define the information reducers will need to make changes in DOM
export const addTodo = (inputValue) => {
  return ({ 
    type: ADD_TODO,
    payload: {
      id: uuid(),
      value: inputValue,
      completed: 'LIVE',
    },
  });
}

// To "complete" the task, you just need the ID. Based on ID you can target
// proper element to change its 'completed' value
export const complete = (id) => {
  return ({
    type: COMPLETE,
    payload: id,
  });
}

export const deleteItem = (id) => {
  return ({
    type: DELETE,
    payload: id,
  });
}
