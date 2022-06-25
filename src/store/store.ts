/* eslint-disable @typescript-eslint/no-explicit-any */
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import {
  loadTranslations,
  setLocale,
  syncTranslationWithStore,
  i18nReducer,
} from 'react-redux-i18n';
import { api } from '../api';
import localization from '../localization';
import gameSlice from './slices/gameSlice';
import loginSlice from './slices/loginSlice';
import visibleSlice from './slices/visibleSlice';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const checkTokenExpirationMiddleware = () => (next: any) => (action: any) => {
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
    i18n: i18nReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(api.middleware)
    .concat(checkTokenExpirationMiddleware),
});

setupListeners(store.dispatch);

syncTranslationWithStore(store);
store.dispatch(loadTranslations(localization));
store.dispatch(setLocale('en'));

export type RootState = ReturnType<typeof store.getState>;

export default store;
