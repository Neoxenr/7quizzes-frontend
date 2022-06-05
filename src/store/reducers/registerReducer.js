import {
  SIGNIN_ERROR,
  SIGNUP_FETCH,
  SIGNUP_SUCCESS,
} from '../actions/actionsTypes';

const registerReducer = (state = false, action) => {
  switch (action.type) {
    case SIGNUP_FETCH:
      return false;
    case SIGNUP_SUCCESS:
      return true;
    case SIGNIN_ERROR:
      return false;
    default:
      return state;
  }
};

export default registerReducer;
