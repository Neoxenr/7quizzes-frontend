import { GET_RULES_SUCCESS } from '../actions/actionsTypes';

// eslint-disable-next-line default-param-last
const rulesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_RULES_SUCCESS:
      return action.rules;
    default:
      return state;
  }
};

export default rulesReducer;
