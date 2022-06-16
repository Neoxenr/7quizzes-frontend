import React, { FC, ReactElement } from 'react';

import './style.css';

const Result: FC = (): ReactElement => (
  <div className="result">
    <header className="result__title">Game finished</header>
    <span className="result__score">Score: 10 points</span>
  </div>
);

export default Result;
