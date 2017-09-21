/**
  *The three functions which were defined in todo.js of constraints are imported
*/
import {
  ADD_TODO, UPDATE_TODO, DELETE_TODO,
} from '../constants';

/**
The three functions outputs an object containing the type,text and id. 
*/
const addTodo = ({ text }) => ({ type: ADD_TODO, payload: { text }, });

const updateTodo = ({ id, text }) => ({ type: UPDATE_TODO, payload: { id, text }, });

const deleteTodo = ({ id }) => ({ type: DELETE_TODO, payload: { id }, });

export default {
  addTodo,
  updateTodo,
  deleteTodo,
};
