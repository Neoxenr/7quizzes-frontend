import { Provider } from 'react-redux';
import { render, RenderResult } from '@testing-library/react';
import { ReactElement } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { api } from '../api';
import gameSlice from '../store/slices/gameSlice';
import visibleSlice from '../store/slices/visibleSlice';
import loginSlice from '../store/slices/loginSlice';

export const renderWithProviders = (
  component: ReactElement,
): { store: any; render: RenderResult } => {
  const store = configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
      game: gameSlice,
      visible: visibleSlice,
      login: loginSlice,
    },
  });
  return {
    store,
    render: render(<Provider store={store}>{component}</Provider>),
  };
};
