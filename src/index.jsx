import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'antd/dist/antd.css';

import Game from './pages/Game/Game';
import GameStart from './pages/GameStart/GameStart';
import GameFinish from './pages/GameFinish/GameFinish';
import GameLayout from './layouts/GameLayout/GameLayout';
import Signin from './pages/Signin/Signin';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import './index.css';

import store from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute><GameLayout /></PrivateRoute>}>
          <Route index element={<PrivateRoute><GameStart /></PrivateRoute>} />
          <Route path="/game" element={<PrivateRoute><Game /></PrivateRoute>} />
          <Route path="/finish-game" element={<PrivateRoute><GameFinish /></PrivateRoute>} />
        </Route>
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
