import React, { FC, ReactElement, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Rules from '../../components/Rules/Rules';
import Button from '../../components/Button/Button';

import { useGetRoomsQuery, useGetRulesQuery } from '../../api';
import { usePostGameMutation, usePrefetch } from '../../api/game/game';

import './style.css';
import { setCurrentQuestionId, setVisibleButton } from '../../store/slices';
import { useDispatch } from 'react-redux';
import { PostGameDto } from '../../common';

const GameStart: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data: getRulesDto } = useGetRulesQuery();

  const { data: rooms } = useGetRoomsQuery();
  const roomId = rooms?.[rooms.length - 1].roomId;

  const [startGame, { isLoading: isStarting }] = usePostGameMutation();

  const [isDisabled, setDisabled] = useState(false);

  const handleClick = () => {
    if (roomId === undefined) {
      setDisabled(true);
      // eslint-disable-next-line no-alert
      alert('Комнат не найдено');
    } else {
      if (!isStarting) {
        startGame(roomId)
          .unwrap()
          .then((payload: PostGameDto) => {
            dispatch(setCurrentQuestionId(payload.questionId));
          })
          .then(() => {
            setDisabled(false);
            dispatch(setVisibleButton(true));
            navigate('/game');
          }).catch((err: any) => {
            console.log(roomId);
            console.error(err);
          });
      }
    }
  };

  return (
    <div className="guide">
      <header className="guide__title">Game rules</header>
      <Rules rules={getRulesDto?.rules} />
      <Button disabled={isDisabled} onClick={handleClick}>
        Start
      </Button>
    </div>
  );
};

export default GameStart;
