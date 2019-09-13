import { STORE_NEW_TODO } from './actionTypes';

export const addNewTodo = newTodo => {
  return {
    type: STORE_NEW_TODO,
    newTodo: newTodo
  }
}
