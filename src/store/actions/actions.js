import {
  GET_RULES,
  SET_VIBISILITY_MODAL,
  SET_VISIBILITY_BUTTON,
} from './actionsTypes';

export const getRules = () => (dispatch) => {
  fetch('/data.json')
    .then((response) => response.json())
    .then((json) => {
      dispatch({
        type: GET_RULES,
        rules: json.rules,
      });
    });
};

export const setVisibleButton = (isVisibleButton) => ({
  type: SET_VISIBILITY_BUTTON,
  isVisibleButton,
});

export const setVisibleModal = (isVisibleModal) => ({
  type: SET_VIBISILITY_MODAL,
  isVisibleModal,
});
