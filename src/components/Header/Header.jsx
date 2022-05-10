import React from 'react';

import { Space, Button } from 'antd';

import './style.css';

import { useDispatch, useSelector } from 'react-redux';
import { setVisibleModal } from '../../store/actions/actions';

import Logo from '../Logo/Logo';
import Logout from '../Logout/Logout';

const Header = () => {
  const dispatch = useDispatch();

  const isVisibleButton = useSelector((state) => state.visibilityReducer.isVisibleButton);

  return (
    <header className="header">
      <Logo />
      <Space size={100}>
        {isVisibleButton && (
          <Button type="link" className="header__button" onClick={() => dispatch(setVisibleModal(true))}>
            Game rules
          </Button>
        )}
        <span className="header__info-text">Points: 0</span>
        <Logout />
      </Space>
    </header>
  );
};

export default Header;
