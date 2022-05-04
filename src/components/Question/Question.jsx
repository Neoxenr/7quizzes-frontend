import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Radio, Space, Form } from 'antd';
import Button from '../Button/Button';
import { answerQuestion, getQuestion } from '../../store/actions/actions';

import './style.css';

const Question = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [counter, setCounter] = useState(1);
  const [isAnswered, setAnswered] = useState(false);
  const [selectedAnswer, selectAnswer] = useState(null);

  const roomId = useSelector((state) => state.roomReducer, shallowEqual);

  const questionId = useSelector((state) => state.answerReducer.answer.questionId, shallowEqual);
  const correctAnswerId = useSelector((state) => state.answerReducer.answer
    .correctAnswerId, shallowEqual);

  const questionsCount = 3;

  const getColor = (answerId) => {
    if (answerId === correctAnswerId) {
      return '#04C100';
    } if (answerId === selectedAnswer) {
      return '#AF0000';
    }
    return '';
  };

  const answers = props.question.answersList.map((answer) => (
    <Radio
      className="question__answer"
      value={answer.answerId}
      key={answer.answerId}
      style={{ color: (isAnswered ? getColor(answer.answerId) : '') }}
    >
      {answer.answerText}
    </Radio>
  ));

  const handleAnswerClick = () => {
    dispatch(answerQuestion(roomId, props.question.questionId, selectedAnswer));
    setAnswered(1);
  };

  const handleNextClick = () => {
    if (counter === questionsCount) {
      navigate('/finish-game');
    } else {
      dispatch(getQuestion(roomId, questionId));
      setAnswered(0);
      selectAnswer(null);
      setCounter(counter + 1);
    }
  };

  return (
    <Form className="question">
      <Form.Item className="question__body">
        <header className="question__title">{`Question # ${counter}`}</header>
        <p className="question__text">{props.question.questionText}</p>
      </Form.Item>
      <Form.Item className="questions__answers" name="answer">
        <Radio.Group onChange={(event) => (!isAnswered && selectAnswer(event.target.value))}>
          <Space direction="vertical">{answers}</Space>
        </Radio.Group>
      </Form.Item>
      <Form.Item className="question__send-button">
        {!isAnswered
          ? (
            <Button disabled={!selectedAnswer} onClick={handleAnswerClick}>
              Answer
            </Button>
          )
          : (
            <Button disabled={!selectedAnswer} onClick={handleNextClick}>
              Next
            </Button>
          )}
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
