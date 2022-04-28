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
} from './actionsTypes';

export const getRules = () => (dispatch) => {
  dispatch({ type: GET_RULES_FETCH });
  fetch('http://7quizzes.local/api/rules', {
    headers: new Headers({
      Authorization:
        'Bearer '
        + 'eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJqd3RAN2JpdHMuaXQiLCJpYXQiOjE2NTExNzQ1NTgsInN1YiI6ImRjZTVjNWVhLWM0N2EtMTFlYy05ZDY0LTAyNDJhYzEyMDAwMiIsImV4cCI6MTY1MTE3ODE1OCwicm9sZXMiOlsiVVNFUiJdLCJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20ifQ.v40s3FWvxeqyVlTwKbonZVu_yypmr_rCfDw-1zU8wfJ4PbdoYZKsw-s48t37Ttajn7VGM6z7e2l-YcX4IdDGaw',
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  })
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

export const getRoom = () => async dispatch => {
  dispatch({ type: GET_ROOM_FETCH });
  fetch('http://7quizzes.local/api/rooms', {
    headers: new Headers({
      Authorization:
        'Bearer '
        + 'eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJqd3RAN2JpdHMuaXQiLCJpYXQiOjE2NTExNzQ1NTgsInN1YiI6ImRjZTVjNWVhLWM0N2EtMTFlYy05ZDY0LTAyNDJhYzEyMDAwMiIsImV4cCI6MTY1MTE3ODE1OCwicm9sZXMiOlsiVVNFUiJdLCJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20ifQ.v40s3FWvxeqyVlTwKbonZVu_yypmr_rCfDw-1zU8wfJ4PbdoYZKsw-s48t37Ttajn7VGM6z7e2l-YcX4IdDGaw',
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  })
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

export const postNewGame = (roomId, navigate) => (dispatch) => {
  dispatch({ type: POST_START_GAME_FETCH });
  fetch(`http://7quizzes.local/api/rooms/${roomId}/game/start`, {
    method: 'POST',
    headers: new Headers({
      Authorization:
        'Bearer '
        + 'eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJqd3RAN2JpdHMuaXQiLCJpYXQiOjE2NTExNzQ1NTgsInN1YiI6ImRjZTVjNWVhLWM0N2EtMTFlYy05ZDY0LTAyNDJhYzEyMDAwMiIsImV4cCI6MTY1MTE3ODE1OCwicm9sZXMiOlsiVVNFUiJdLCJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20ifQ.v40s3FWvxeqyVlTwKbonZVu_yypmr_rCfDw-1zU8wfJ4PbdoYZKsw-s48t37Ttajn7VGM6z7e2l-YcX4IdDGaw',
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  })
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

export const getQuestion = (roomId, questionId) => (dispatch) => {
  dispatch({ type: GET_QUESTION_FETCH });
  fetch(
    `http://7quizzes.local/api/rooms/${roomId}/game/question/${questionId}`,
    {
      headers: new Headers({
        Authorization:
          'Bearer '
          + 'eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJqd3RAN2JpdHMuaXQiLCJpYXQiOjE2NTExNzQ1NTgsInN1YiI6ImRjZTVjNWVhLWM0N2EtMTFlYy05ZDY0LTAyNDJhYzEyMDAwMiIsImV4cCI6MTY1MTE3ODE1OCwicm9sZXMiOlsiVVNFUiJdLCJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20ifQ.v40s3FWvxeqyVlTwKbonZVu_yypmr_rCfDw-1zU8wfJ4PbdoYZKsw-s48t37Ttajn7VGM6z7e2l-YcX4IdDGaw',
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    },
  )
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

export const answerQuestion = (roomId, questionId, answerId) => (dispatch) => {
  dispatch({ type: GAME_ANSWER_QUESTION_FETCH });
  fetch(
    `http://7quizzes.local/api/rooms/${roomId}/game/question/${questionId}/answer`,
    {
      method: 'POST',
      headers: new Headers({
        Authorization:
          'Bearer '
          + 'eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJqd3RAN2JpdHMuaXQiLCJpYXQiOjE2NTExNzQ1NTgsInN1YiI6ImRjZTVjNWVhLWM0N2EtMTFlYy05ZDY0LTAyNDJhYzEyMDAwMiIsImV4cCI6MTY1MTE3ODE1OCwicm9sZXMiOlsiVVNFUiJdLCJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20ifQ.v40s3FWvxeqyVlTwKbonZVu_yypmr_rCfDw-1zU8wfJ4PbdoYZKsw-s48t37Ttajn7VGM6z7e2l-YcX4IdDGaw',
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({ answerId }),
    },
  )
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

export const setVisibleButton = (isVisibleButton) => ({
  type: SET_VISIBILITY_BUTTON,
  isVisibleButton,
});

export const setVisibleModal = (isVisibleModal) => ({
  type: SET_VIBISILITY_MODAL,
  isVisibleModal,
});
