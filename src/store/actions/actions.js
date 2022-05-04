import {
  GET_QUESTION_ERROR,
  GET_QUESTION_FETCH,
  GET_QUESTION_SUCCESS,
  GET_RULES_FETCH,
  GET_RULES_SUCCESS,
  GET_RULES_ERROR,
  SET_VIBISILITY_MODAL,
  SET_VISIBILITY_BUTTON,
  GET_ROOM_FETCH,
  GET_ROOM_SUCCESS,
  GET_ROOM_ERROR,
  POST_START_GAME_FETCH,
  POST_START_GAME_SUCCESS,
  POST_START_GAME_ERROR,
  GAME_ANSWER_QUESTION_FETCH,
  GAME_ANSWER_QUESTION_SUCCESS,
  GAME_ANSWER_QUESTION_ERROR,
  SIGNIN_FETCH,
  SIGNIN_ERROR,
  SIGNIN_SUCCESS,
} from './actionsTypes';

import {
  getRulesRequest,
  getRoomsRequest,
  postNewGameRequest,
  getQuestionRequest,
  postAnswerQuestionRequest,
  signInRequest,
} from '../../fetcher/fetcher';
import { checkStatus } from '../../utilities/utilities';

export const getRules = () => async (dispatch) => {
  dispatch({ type: GET_RULES_FETCH });

  const rulesResponse = getRulesRequest();

  rulesResponse
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: GET_RULES_SUCCESS,
        rules: data.rules,
      });
    })
    .catch((error) => {
      dispatch({ type: GET_RULES_ERROR });
      console.error(error);
    });
};

export const getRoom = () => async (dispatch) => {
  dispatch({ type: GET_ROOM_FETCH });

  const roomsResponse = getRoomsRequest();

  roomsResponse
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: GET_ROOM_SUCCESS,
        roomId: data[data.length - 1]?.roomId,
      });
    })
    .catch((error) => {
      dispatch({ type: GET_ROOM_ERROR });
      console.error(error);
    });
};

export const postNewGame = (roomId, navigate) => async (dispatch) => {
  dispatch({ type: POST_START_GAME_FETCH });

  const newGameResponse = postNewGameRequest(roomId);

  newGameResponse
    .then((response) => response.json())
    .then((data) => {
      dispatch({ type: POST_START_GAME_SUCCESS, questionId: data.questionId });
      navigate();
    })
    .catch((error) => {
      dispatch({ type: POST_START_GAME_ERROR });
      console.error(error);
    });
};

export const getQuestion = (roomId, questionId) => async (dispatch) => {
  dispatch({ type: GET_QUESTION_FETCH });

  const questionResponse = getQuestionRequest(roomId, questionId);

  questionResponse
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: GET_QUESTION_SUCCESS,
        question: data,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_QUESTION_ERROR,
      });
      console.error(error);
    });
};

export const answerQuestion = (roomId, questionId, answerId) => async (dispatch) => {
  dispatch({ type: GAME_ANSWER_QUESTION_FETCH });

  const answerQuestionResponse = postAnswerQuestionRequest(
    roomId,
    questionId,
    answerId,
  );

  answerQuestionResponse
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: GAME_ANSWER_QUESTION_SUCCESS,
        answer: data,
      });
    })
    .catch((error) => {
      dispatch({ type: GAME_ANSWER_QUESTION_ERROR });
      console.error(error);
    });
};

export const signIn = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: SIGNIN_FETCH });

    const signInResponse = await signInRequest(email, password);
    checkStatus(signInResponse);

    const data = await signInResponse.json();
    localStorage.setItem('token', data.accessToken);

    dispatch({ type: SIGNIN_SUCCESS });
  } catch (error) {
    dispatch({ type: SIGNIN_ERROR });
    console.error(error);
  }
};

export const setVisibleButton = (isVisibleButton) => ({
  type: SET_VISIBILITY_BUTTON,
  isVisibleButton,
});

export const setVisibleModal = (isVisibleModal) => ({
  type: SET_VIBISILITY_MODAL,
  isVisibleModal,
});
