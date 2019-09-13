import { STORE_NEW_TODO } from 'store/actions/actionTypes';

const initialState = {
	title: ''
}

const newTodo = (state=initialState, action) => {

  switch (action.type) {
    case STORE_NEW_TODO:
      return {
        ...state,
        ...action.newTodo
      };

    default:
      return state;
  }
}

export default newTodo;