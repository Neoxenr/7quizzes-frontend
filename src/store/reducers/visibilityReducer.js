import {
  SET_VIBISILITY_MODAL,
  SET_VISIBILITY_BUTTON,
} from '../actions/actionsTypes';

const initialState = {
  isVisibleButton: false,
  isVisibleModal: false,
};

// eslint-disable-next-line default-param-last
const visibilityReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_BUTTON:
      return {
        ...state,
        isVisibleButton: action.isVisibleButton,
      };
    case SET_VIBISILITY_MODAL:
      return {
        ...state,
        isVisibleModal: action.isVisibleModal,
      };
    default:
      return state;
  }
};

export default visibilityReducer;
