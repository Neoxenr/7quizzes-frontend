import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';

const PrivateRoute = (props) => {
  const navigate = useNavigate();

  const isAuthorized = useSelector(state => state.authReducer);

  useEffect(() => {
    if (!isAuthorized) {
      navigate('/signin');
    }
  }, [navigate, isAuthorized]);

  return props.children;
};

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired
};

export default PrivateRoute;
