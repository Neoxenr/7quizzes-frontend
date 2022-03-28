import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Question = props => {
  const answers = props.question.answers.map(answer => (
    <>
      <input className="answer-input" type="radio" name="answers" value={answer.id} id={answer.id} />
      <label className="answer-label" key={answer.id} htmlFor={answer.id}>
        {answer.text}
      </label>
    </>
  ));

  return (
    <div className="question">
      <div className="question__body">
        <header className="question__title">
          {props.question.header}
        </header>
        <p className="question__text">
          {props.question.text}
        </p>
      </div>
      <form className="answers">
        {answers}
      </form>
    </div>
  );
};

Question.propTypes = {
  question: PropTypes.exact({
    answers: PropTypes.arrayOf(PropTypes.exact({
      id: PropTypes.string,
      text: PropTypes.string,
    })),
    header: PropTypes.string,
    text: PropTypes.string,
  }).isRequired
};

export default Question;
