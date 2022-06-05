import { GET_ROOM_SUCCESS } from '../actions/actionsTypes';

const roomReducer = (state = null, action) => {
  switch (action.type) {
    case GET_ROOM_SUCCESS:
      return action.roomId;
    default:
      return state;
  }
};

export default roomReducer;
