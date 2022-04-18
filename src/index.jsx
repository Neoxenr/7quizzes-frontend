import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'antd/dist/antd.css';

import Game from './pages/Game/Game';
import GameStart from './pages/GameStart/GameStart';
import GameFinish from './pages/GameFinish/GameFinish';
import GameLayout from './layouts/GameLayout/GameLayout';

import './index.css';

import store from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GameLayout />}>
          <Route index element={<GameStart />} />
          <Route path="/game" element={<Game />} />
          <Route path="/finish-game" element={<GameFinish />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
