import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import rulesReducer from './reducers/rulesReducer';
import visibilityReducer from './reducers/visibilityReducer';

const store = createStore(
  combineReducers({ rules: rulesReducer, isVisible: visibilityReducer }),
  applyMiddleware(thunk),
);

export default store;
