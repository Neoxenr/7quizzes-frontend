import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { Modal } from 'antd';

import Question from '../../components/Question/Question';
import Rules from '../../components/Rules/Rules';

import {
  getQuestion,
  setVisibleButton, setVisibleModal
} from '../../store/actions/actions';

const Game = () => {
  const dispatch = useDispatch();

  const rules = useSelector((state) => state.rulesReducer);

  const isVisibleModal = useSelector((state) => state.visibilityReducer
    .isVisibleModal, shallowEqual);

  const roomId = useSelector((state) => state.roomReducer, shallowEqual);
  const questionId = useSelector((state) => state.gameReducer, shallowEqual);

  const question = useSelector((state) => state.questionReducer.question);

  const handleOk = () => {
    dispatch(setVisibleModal(false));
  };

  const handleCancel = () => {
    dispatch(setVisibleModal(false));
  };

  useEffect(() => {
    dispatch(getQuestion(roomId, questionId));
    dispatch(setVisibleButton(true));
    return () => {
      dispatch(setVisibleButton(false));
    };
  }, []);

  return (
    <>
      <Modal
        centered
        width={1200}
        visible={isVisibleModal}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Rules rules={rules} />
      </Modal>
      <Question question={question} />
    </>
  );
};

export default Game;
