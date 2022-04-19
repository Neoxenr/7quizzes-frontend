import { combineReducers } from 'redux';
import questionReducer from './questionReducer';

import rulesReducer from './rulesReducer';
import visibilityReducer from './visibilityReducer';

const rootReducer = combineReducers({
  rulesReducer,
  visibilityReducer,
  questionReducer,
});

export default rootReducer;
