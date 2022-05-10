import { combineReducers } from 'redux';

import questionReducer from './questionReducer';
import rulesReducer from './rulesReducer';
import visibilityReducer from './visibilityReducer';
import roomReducer from './roomReducer';
import gameReducer from './gameReducer';
import answerReducer from './answerReducer';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
  rulesReducer,
  visibilityReducer,
  roomReducer,
  gameReducer,
  questionReducer,
  answerReducer,
  loginReducer,
  registerReducer,
  errorReducer,
});

export default rootReducer;
