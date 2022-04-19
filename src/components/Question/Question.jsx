import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Radio, Space, Form } from 'antd';
import Button from '../Button/Button';
import { getQuestion } from '../../store/actions/actions';

import './style.css';

const Question = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [counter, setCounter] = useState(1);
  const [selectedAnswer, selectAnswer] = useState(null);

  const questionsCount = 3;

  const handleClick = () => {
    if (counter === questionsCount) {
      navigate('/finish-game');
    }
    setCounter(counter + 1);
    dispatch(getQuestion(counter + 1));
  };

  const answers = props.question.answersList.map((answer) => (
    <Radio className="question__answer" value={answer.answerId} key={answer.answerId}>
      {answer.answerText}
    </Radio>
  ));

  return (
    <Form className="question">
      <Form.Item className="question__body">
        <header className="question__title">{`Question # ${counter}`}</header>
        <p className="question__text">{props.question.questionText}</p>
      </Form.Item>
      <Form.Item className="questions__answers" name="answer">
        <Radio.Group onChange={(event) => selectAnswer(event.target.value)}>
          <Space direction="vertical">{answers}</Space>
        </Radio.Group>
      </Form.Item>
      <Form.Item className="question__send-button">
        <Button className="button" disabled={!selectedAnswer} onClick={handleClick}>
          Answer
        </Button>
      </Form.Item>
    </Form>
  );
};

Question.propTypes = {
  question: PropTypes.exact({
    questionId: PropTypes.string,
    questionText: PropTypes.string,
    answersList: PropTypes.arrayOf(
      PropTypes.exact({
        answerId: PropTypes.string,
        answerText: PropTypes.string,
      }),
    ),
  }).isRequired,
};

export default Question;
