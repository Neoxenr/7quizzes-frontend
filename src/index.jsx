import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'antd/dist/antd.css';

import Game from './pages/Game/Game';
import GameStart from './pages/GameStart/GameStart';
import GameFinish from './pages/GameFinish/GameFinish';
import GameLayout from './layouts/GameLayout/GameLayout';
import Signin from './pages/Authorization/Signin/Signin';
import Signup from './pages/Authorization/Signup/Signup';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RedirectRoute from './components/RedirectRoute/RedirectRoute';

import store from './store/store';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GameLayout />}>
          <Route index element={<PrivateRoute><GameStart /></PrivateRoute>} />
          <Route path="/game" element={<PrivateRoute><Game /></PrivateRoute>} />
          <Route path="/finish-game" element={<PrivateRoute><GameFinish /></PrivateRoute>} />
        </Route>
        <Route path="/signin" element={<RedirectRoute><Signin /></RedirectRoute>} />
        <Route path="/signup" element={<RedirectRoute><Signup /></RedirectRoute>} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
