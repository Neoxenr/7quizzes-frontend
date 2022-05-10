import React from 'react';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import Icon from '@ant-design/icons';
import { SIGNIN_FETCH } from '../../store/actions/actionsTypes';

import { ReactComponent as LogoutIcon } from './img/Logout.svg';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem('token');
    dispatch({ type: SIGNIN_FETCH });
    navigate('/signin');
  };

  return (
    <Button
      ghost
      size="large"
      icon={(
        <Icon
          component={LogoutIcon}
          style={{ fontSize: '32px' }}
        />
      )}
      onClick={handleClick}
    />
  );
};

export default Logout;
