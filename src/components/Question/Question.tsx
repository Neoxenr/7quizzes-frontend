import React, { FC, ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Radio, Space, Form } from 'antd';
import { I18n } from 'react-redux-i18n';
import { useAnswerQuestionMutation, useGetRoomsQuery } from '../../api';
import {
  AnswerQuestionBadResponseDto,
  AnswerQuestionNormalResponseDto,
} from '../../common';
import { setCurrentQuestionId } from '../../store/slices';

import Button from '../Button/Button';

import './style.css';

type Props = {
  question:
    | {
        questionId: string;
        questionText: string;
        answersList: [
          {
            answerId: string;
            answerText: string;
          },
        ];
      }
    | undefined;
};

const Question: FC<Props> = (props: Props): ReactElement => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [counter, setCounter] = useState<number>(1);
  const [isAnswered, setAnswered] = useState<boolean>(false);
  const [selectedAnswer, selectAnswer] = useState<string | undefined>(
    undefined,
  );
  const [correctAnswerId, setCorrectAnswerId] = useState<string | undefined>(
    undefined,
  );
  const [nextQuestionId, setNextQuestionId] = useState<string | undefined>(
    undefined,
  );

  const { data: rooms } = useGetRoomsQuery();
  const roomId = rooms?.[rooms.length - 1].roomId;

  const [answerQuestion, { isLoading: isAnswering }] = useAnswerQuestionMutation();

  const questionsCount = 3;

  const answers = props?.question?.answersList.map((answer) => (
    <Radio
      className={`question__answer ${
        // eslint-disable-next-line no-nested-ternary
        isAnswered
          ? answer.answerId === correctAnswerId
            ? 'question__answer_correct'
            : 'question__answer_incorrect'
          : ''
      }`}
      value={answer.answerId}
      key={answer.answerId}
    >
      {answer.answerText}
    </Radio>
  ));

  const handleAnswerClick = () => {
    if (!isAnswering) {
      answerQuestion({
        roomId,
        questionId: props.question?.questionId,
        dto: { answerId: selectedAnswer },
      })
        .unwrap()
        .then(
          (
            dto: AnswerQuestionNormalResponseDto & AnswerQuestionBadResponseDto,
          ) => {
            setNextQuestionId(dto.questionId);
            setAnswered(true);
            if (dto.correctAnswerId !== undefined) {
              setCorrectAnswerId(dto.correctAnswerId);
            }
          },
        );
    }
  };

  const handleNextClick = () => {
    if (counter === questionsCount) {
      navigate('/finish-game');
    } else {
      setAnswered(false);
      selectAnswer(undefined);
      setCounter(counter + 1);
      setCorrectAnswerId(undefined);
      setNextQuestionId(undefined);
      dispatch(setCurrentQuestionId(nextQuestionId));
    }
  };

  return (
    <Form className="question">
      <Form.Item className="question__body">
        <header className="question__title">{`${I18n.t('page.game.question.questionTitle')} # ${counter}`}</header>
        <p className="question__text">{props.question?.questionText}</p>
      </Form.Item>
      <Form.Item className="questions__answers" name="answer">
        <Radio.Group
          onChange={(event) => !isAnswered && selectAnswer(event.target.value)}
        >
          <Space direction="vertical">{answers}</Space>
        </Radio.Group>
      </Form.Item>
      <Form.Item className="question__send-button">
        {!isAnswered ? (
          <Button disabled={!selectedAnswer} onClick={handleAnswerClick}>
            {I18n.t('page.game.question.questionAnswer')}
          </Button>
        ) : (
          <Button disabled={!selectedAnswer} onClick={handleNextClick}>
            {I18n.t('page.game.question.questionNext')}
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

export default Question;
