import { STORE_NEW_TODO } from './actionTypes';

export const addTodo = newTodo => {
  return {
    type: STORE_NEW_TODO,
    newTodo: newTodo
  }
}
