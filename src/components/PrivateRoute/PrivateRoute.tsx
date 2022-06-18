import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { RootState } from '../../store/store';

export function PrivateRoute(): ReactElement {
  const isAuthorized = useSelector((state: RootState) => state.login.isAuthorized);

  return isAuthorized || localStorage.getItem('token') !== null ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" replace />
  );
}

export default PrivateRoute;
