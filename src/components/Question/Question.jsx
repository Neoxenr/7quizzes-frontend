import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';
import { Radio, Space, Form } from 'antd';
import Button from '../Button/Button';

import './style.css';

const Question = (props) => {
  const navigate = useNavigate();

  const [selectedAnswer, selectAnswer] = useState(null);

  const answers = props.question.answers.map((answer) => (
    <Radio className="question__answer" value={answer.id} key={answer.id}>
      {answer.text}
    </Radio>
  ));

  return (
    <Form className="question">
      <Form.Item className="question__body">
        <header className="question__title">{props.question.header}</header>
        <p className="question__text">{props.question.text}</p>
      </Form.Item>
      <Form.Item className="questions__answers" name="answer">
        <Radio.Group onChange={(event) => selectAnswer(event.target.value)}>
          <Space direction="vertical">{answers}</Space>
        </Radio.Group>
      </Form.Item>
      <Form.Item className="question__send-button">
        <Button className="button" disabled={!selectedAnswer} onClick={() => navigate('/finish-game')}>
          Answer
        </Button>
      </Form.Item>
    </Form>
  );
};

Question.propTypes = {
  question: PropTypes.exact({
    answers: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string,
        text: PropTypes.string,
      }),
    ),
    header: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};

export default Question;
