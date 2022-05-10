import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button/Button';
import Result from '../../components/Result/Result';
import { getRoom } from '../../store/actions/actions';

const GameFinish = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => () => {
    dispatch(getRoom());
  });

  return (
    <>
      <Result />
      <Button onClick={() => navigate('/', { replace: true })}>Play again</Button>
    </>
  );
};

export default GameFinish;
