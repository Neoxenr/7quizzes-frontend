import { createSlice } from '@reduxjs/toolkit';

type State = {
  questionId: string | undefined;
};

const initialState: State = {
  questionId: undefined,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setCurrentQuestionId: (state, action) => {
      state.questionId = action.payload;
    },
  },
});

export const { setCurrentQuestionId } = gameSlice.actions;

export default gameSlice.reducer;
