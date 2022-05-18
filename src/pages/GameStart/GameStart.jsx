import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getRules } from '../../store/actions/actions';

import Guide from '../../components/Guide/Guide';

const GameStart = () => {
  const dispatch = useDispatch();
  const rules = useSelector((state) => state.rules);

  useEffect(() => {
    dispatch(getRules());
  });

  return (
    <Guide rules={rules} />
  );
};

export default GameStart;
