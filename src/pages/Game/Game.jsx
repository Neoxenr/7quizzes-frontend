import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { Modal } from 'antd';

import Question from '../../components/Question/Question';
import Rules from '../../components/Rules/Rules';

import { setVisibleButton, setVisibleModal } from '../../store/actions/actions';

const Game = () => {
  const dispatch = useDispatch();

  const rules = useSelector((state) => state.rulesReducer);
  const question = useSelector((state) => state.questionReducer.question, shallowEqual);
  const isVisibleModal = useSelector((state) => state.visibilityReducer.isVisibleModal);

  const handleOk = () => {
    dispatch(setVisibleModal(false));
  };

  const handleCancel = () => {
    dispatch(setVisibleModal(false));
  };

  useEffect(() => {
    dispatch(setVisibleButton(true));
    return () => {
      dispatch(setVisibleButton(false));
    };
  }, [dispatch]);

  return (
    <>
      <Modal centered width={1200} visible={isVisibleModal} onOk={handleOk} onCancel={handleCancel}>
        <Rules rules={rules} />
      </Modal>
      <Question question={question} />
    </>
  );
};

export default Game;
