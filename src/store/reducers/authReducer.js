import {
  SIGNIN_ERROR,
  SIGNIN_FETCH,
  SIGNIN_SUCCESS,
} from '../actions/actionsTypes';

const authReducer = (state = false, action) => {
  switch (action.type) {
    case SIGNIN_FETCH:
      return false;
    case SIGNIN_SUCCESS:
      return true;
    case SIGNIN_ERROR:
      return false;
    default:
      return state;
  }
};

export default authReducer;
