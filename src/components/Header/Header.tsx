import React, { FC, ReactElement } from 'react';

import { RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';

import { Space, Button } from 'antd';

import './style.css';

import Logo from '../Logo/Logo';
import Logout from '../Logout/Logout';
import { setVisibleModal } from '../../store/slices';

const Header: FC = (): ReactElement => {
  const dispatch = useDispatch();

  const isVisibleButton = useSelector<RootState, boolean>(
    (state) => state.visible.isVisibleButton,
  );

  return (
    <header className="header">
      <Logo />
      <Space size={100}>
        {isVisibleButton && (
          <Button
            type="link"
            className="header__button"
            onClick={() => dispatch(setVisibleModal(true))}>
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
