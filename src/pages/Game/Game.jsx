import React from 'react';

import GameLayout from '../../layouts/GameLayout/GameLayout';
import Question from '../../components/Question/Question';
import Button from '../../components/Button/Button';

import './style.css';

const Game = () => {
  const question = {
    header: 'Question 1',
    text: 'Text of the question. \nLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat?\n',
    answers: [
      {
        id: 'qwerty123',
        text: 'Nope',
      },
      {
        id: 'qwerty333',
        text: 'No',
      },
      {
        id: 'qwerty444',
        text: 'Yeap',
      },
    ],
  };

  return (
    <GameLayout>
      <div className="game">
        <Question question={question} />
        <Button onClick={() => alert('Answer is accepted')}>Answer</Button>
      </div>
    </GameLayout>
  );
};

export default Game;
