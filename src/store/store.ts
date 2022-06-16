import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { api } from '../api';
import gameSlice from './slices/gameSlice';
import loginSlice from './slices/loginSlice';
import visibleSlice from './slices/visibleSlice';

const checkTokenExpirationMiddleware =
  (store: any) => (next: any) => (action: any) => {
    const token = localStorage.getItem('token');
    if (token) {
      const parsedToken = JSON.parse(window.atob(token.split('.')[1]));
      if (parsedToken.exp < Date.now() / 1000) {
        next(action);
        localStorage.clear();
        window.location.reload();
      }
    }
    next(action);
  };

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    game: gameSlice,
    visible: visibleSlice,
    login: loginSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(api.middleware)
      .concat(checkTokenExpirationMiddleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export default store;
