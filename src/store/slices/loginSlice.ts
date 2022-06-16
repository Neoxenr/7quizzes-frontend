import { createSlice } from '@reduxjs/toolkit';

type State = {
  isAuthorized: boolean;
};

const initialState: State = {
  isAuthorized: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    authorize: (state, action) => {
      state.isAuthorized = action.payload;
    },
  },
});

export const { authorize } = loginSlice.actions;

export default loginSlice.reducer;
