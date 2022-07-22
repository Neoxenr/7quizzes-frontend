import React, { FC, MouseEventHandler, ReactElement } from 'react';

import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

import Icon from '@ant-design/icons';

import { ReactComponent as LogoutIcon } from './img/Logout.svg';

const Logout: FC = (): ReactElement => {
  const navigate = useNavigate();

  const handleClick: MouseEventHandler<HTMLButtonElement> = (): void => {
    localStorage.removeItem('token');
    window.location.reload();
    navigate('/signin');
  };

  return (
    <Button
      ghost
      size="large"
      icon={<Icon component={LogoutIcon} style={{ fontSize: '32px' }} />}
      onClick={handleClick}
    />
  );
};

export default Logout;
