import React from 'react';

import './style.css';

import logo from './img/7Quizzes.png';

const Header = () => (
  <header className="header">
    <img className="header__logo" src={logo} alt="7Quizzes logo" />
    <div className="header__info-block">
      <a className="header__link" href="/">Game rules</a>
      <span className="header__info-text">Points: 0</span>
    </div>
  </header>
);

export default Header;
