import { GET_RULES } from '../actions/actionsTypes';

// eslint-disable-next-line default-param-last
const rulesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_RULES:
      return action.rules;
    default:
      return state;
  }
};

export default rulesReducer;
