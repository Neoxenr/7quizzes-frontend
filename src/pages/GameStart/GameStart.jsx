import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getRules, getQuestion } from '../../store/actions/actions';

import Rules from '../../components/Rules/Rules';
import Button from '../../components/Button/Button';

import './style.css';

const GameStart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const rules = useSelector((state) => state.rulesReducer);

  const handleClick = () => {
    dispatch(getQuestion(1));
    navigate('/game');
  };

  useEffect(() => {
    dispatch(getRules());
  }, [dispatch]);

  return (
    <div className="guide">
      <header className="guide__title">Game rules</header>
      <Rules rules={rules} />
      <Button className="button" onClick={handleClick}>Start</Button>
    </div>
  );
};

export default GameStart;
