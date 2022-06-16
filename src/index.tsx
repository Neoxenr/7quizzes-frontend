import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store';

import 'antd/dist/antd.css';

import Game from './pages/Game/Game';
import GameStart from './pages/GameStart/GameStart';
import GameFinish from './pages/GameFinish/GameFinish';
import GameLayout from './layouts/GameLayout/GameLayout';
import SignIn from './pages/Authorization/Signin/SignIn';
import Signup from './pages/Authorization/Signup/SignUp';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import './index.css';
import PublicRoute from './components/PublicRoute/PublicRoute';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<GameLayout />}>
            <Route index element={<GameStart />} />
            <Route path="/game" element={<Game />} />
            <Route path="/finish-game" element={<GameFinish />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
);
