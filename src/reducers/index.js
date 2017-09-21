/**
  All reducer functions from todos file are combined because only one reducer can be passed. 
*/
import { combineReducers } from 'redux';

import todos from './todos';

export default combineReducers({
  todos,
});
