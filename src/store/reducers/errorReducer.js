import { ERROR, ERROR_NONE } from '../actions/actionsTypes';

const errorReducer = (state = '', action) => {
  switch (action.type) {
    case ERROR:
      return action.error;
    case ERROR_NONE:
      return '';
    default:
      return state;
  }
};

export default errorReducer;
