import React from 'react';

import { Image, Space } from 'antd';

import './style.css';

import logo from './img/7Quizzes.png';

const Header = () => (
  <header className="header">
    <Image src={logo} alt="7Quizzes logo" />
    <Space>
      <a className="header__link" href="/">
        Game rules
      </a>
      <span className="header__info-text">Points: 0</span>
    </Space>
  </header>
);

export default Header;
