import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button/Button';
import Guide from '../../components/Guide/Guide';

const GameStart = () => {
  const navigate = useNavigate();

  const rules = [
    'Players are simultaneously asked a question and given 30 seconds to answer.',
    'The answer is accepted by the player who first chose the answer option.',
    'There can be only one correct answer.',
    'If the answer turned out to be correct, the answering player receives points, and the rest of the players do not receive anything, while they see the correct answer and the respondent.',
    'If the answer turned out to be incorrect, then the respondent does not receive an answer points and loses the opportunity to choose an option in this round, waiting for the others to answer.',
    'The round ends when one of the players gives the correct answer or the time allotted for the answer in this round runs out.',
    'The game ends when the number of questions expires.'
  ];

  return (
    <>
      <Guide rules={rules} />
      <Button className="button" onClick={() => navigate('/game')}>Start</Button>
    </>
  );
};

export default GameStart;
