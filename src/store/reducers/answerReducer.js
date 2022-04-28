import { GAME_ANSWER_QUESTION_SUCCESS } from '../actions/actionsTypes';

const initialState = {
  answer: {
    correctAnswerId: null,
    questionId: null,
    totalScore: null,
    questionScore: null,
  },
};

const answerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GAME_ANSWER_QUESTION_SUCCESS:
      return {
        ...state,
        answer: action.answer,
      };
    default:
      return state;
  }
};

export default answerReducer;
