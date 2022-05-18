import React from 'react';

import { Space, Button } from 'antd';

import './style.css';

import { useDispatch, useSelector } from 'react-redux';
import logo from './img/7Quizzes.svg';
import { setVisibleModal } from '../../store/actions/actions';

const Header = () => {
  const dispatch = useDispatch();
  const isVisibleButton = useSelector((state) => state.visibilityReducer.isVisibleButton);

  return (
    <header className="header">
      <img src={logo} alt="7Quizzes logo" />
      <Space>
        {isVisibleButton && (
          <Button type="link" className="header__button" onClick={() => dispatch(setVisibleModal(true))}>
            Game rules
          </Button>
        )}
        <span className="header__info-text">Points: 0</span>
      </Space>
    </header>
  );
};

export default Header;
