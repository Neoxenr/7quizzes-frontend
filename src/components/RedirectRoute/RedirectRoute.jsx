import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';

import { SIGNIN_SUCCESS } from '../../store/actions/actionsTypes';

const RedirectRoute = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch({ type: SIGNIN_SUCCESS });
    }
  }, [navigate, dispatch]);

  return props.children;
};

RedirectRoute.propTypes = {
  children: PropTypes.element.isRequired
};

export default RedirectRoute;
