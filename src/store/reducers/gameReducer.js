import { POST_START_GAME_SUCCESS } from '../actions/actionsTypes';

const gameReducer = (state = null, action) => {
  switch (action.type) {
    case POST_START_GAME_SUCCESS:
      return action.questionId;
    default:
      return state;
  }
};

export default gameReducer;
