import data from './data';
import isLoading from './is-loading';

import { combineReducers } from 'redux-immutable';

const rootReducer = combineReducers({
  data,
  isLoading
})

export default rootReducer
