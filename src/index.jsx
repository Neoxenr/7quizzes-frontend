import React from 'react';
import ReactDOM from 'react-dom';

import 'antd/dist/antd.css';

import Game from './pages/Game/Game';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>,
  document.getElementById('root'),
);
