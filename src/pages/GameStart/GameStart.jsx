import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  getRules, getRoom, postNewGame
} from '../../store/actions/actions';

import Rules from '../../components/Rules/Rules';
import Button from '../../components/Button/Button';

import './style.css';

const GameStart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const rules = useSelector((state) => state.rulesReducer);
  const roomId = useSelector((state) => state.roomReducer);

  const isAuthorized = useSelector(state => state.loginReducer);

  const [isDisabled, setDisabled] = useState(false);

  const handleClick = () => {
    if (roomId === null) {
      setDisabled(true);
      // eslint-disable-next-line no-alert
      alert('Комнат не найдено');
    } else {
      setDisabled(false);
      dispatch(postNewGame(roomId, () => navigate('/game')));
    }
  };

  useEffect(() => {
    if (isAuthorized) {
      dispatch(getRoom());
      dispatch(getRules());
    }
  }, [dispatch, isAuthorized]);

  return (
    <div className="guide">
      <header className="guide__title">Game rules</header>
      <Rules rules={rules} />
      <Button disabled={isDisabled} onClick={handleClick}>Start</Button>
    </div>
  );
};

export default GameStart;
