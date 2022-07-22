import React, { FC, ReactElement } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { I18n } from 'react-redux-i18n';
import { Space, Button } from 'antd';
import { RootState } from '../../store/store';
import { setVisibleModal } from '../../store/slices';

import './style.css';

import Logo from '../Logo/Logo';
import Logout from '../Logout/Logout';

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
            onClick={() => dispatch(setVisibleModal(true))}
          >
            {I18n.t('layout.header.rules')}
          </Button>
        )}
        <span className="header__info-text">{I18n.t('layout.header.points') + 0}</span>
        <Logout />
      </Space>
    </header>
  );
};

export default Header;
