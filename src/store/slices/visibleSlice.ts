import { createSlice } from '@reduxjs/toolkit';

type State = {
  isVisibleButton: boolean;
  isVisibleModal: boolean;
};

const initialState: State = {
  isVisibleButton: false,
  isVisibleModal: false,
};

const visibleSlice = createSlice({
  name: 'visible',
  initialState,
  reducers: {
    setVisibleModal: (state, action) => {
      state.isVisibleModal = action.payload;
    },
    setVisibleButton: (state, action) => {
      state.isVisibleButton = action.payload;
    },
  },
});

export const { setVisibleModal, setVisibleButton } = visibleSlice.actions;

export default visibleSlice.reducer;
