/**
  Functioning of the three functions(addTodo,updateTodo,deleteTodo)
*/
import {
  ADD_TODO, UPDATE_TODO, DELETE_TODO,
} from '../constants';

/**
 Function to define the three actions
 @param{text} state:array to store the data
 action:to swtich the type of action according to the request
*/
const todosReducer = (state = [], action) => {
  switch (action.type) {/**Adding the todo in array of state and returning the array*/
    case ADD_TODO: {
      const { text } = action.payload;

      return [
        ...state,
        { text },
      ];
    }
    case UPDATE_TODO: {   /**Updating the array of states which results in empty array*/

      return state;
    }
    case DELETE_TODO: { /**Deleting any todo from array and returning the rest array*/
      const { id } = action.payload;
      const length = state.length;

      return [
        ...state.slice(0, id),
        ...state.slice(id + 1, length),
      ];
    }

    default:
      return state; /**For default condition returning a state*/
  }
};

export default todosReducer;
