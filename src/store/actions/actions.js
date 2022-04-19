import {
  GET_QUESTION_ERROR,
  GET_QUESTION_FETCH,
  GET_QUESTION_SUCCESS,
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

export const getQuestion = (index) => (dispatch) => {
  dispatch({ type: GET_QUESTION_FETCH });
  fetch(`/questions/question_${index}.json`)
    .then((response) => response.json())
    .then((json) => {
      dispatch({
        type: GET_QUESTION_SUCCESS,
        question: json,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_QUESTION_ERROR,
      });
      console.error(error);
    });
};
