import { combineReducers } from 'redux';

import questionReducer from './questionReducer';
import rulesReducer from './rulesReducer';
import visibilityReducer from './visibilityReducer';
import roomReducer from './roomReducer';
import gameReducer from './gameReducer';
import answerReducer from './answerReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  rulesReducer,
  visibilityReducer,
  roomReducer,
  gameReducer,
  questionReducer,
  answerReducer,
  authReducer,
});

export default rootReducer;
