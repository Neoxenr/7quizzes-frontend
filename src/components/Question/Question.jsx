import React from 'react';
import PropTypes from 'prop-types';

import { Radio, Space } from 'antd';

import './style.css';

const Question = (props) => {
  const answers = props.question.answers.map((answer) => (
    <Radio className="question__answer" value={answer.id} key={answer.id} id={answer.id}>
      {answer.text}
    </Radio>
  ));

  return (
    <div className="question">
      <div className="question__body">
        <header className="question__title">{props.question.header}</header>
        <p className="question__text">{props.question.text}</p>
      </div>
      <Radio.Group>
        <Space direction="vertical">{answers}</Space>
      </Radio.Group>
    </div>
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
