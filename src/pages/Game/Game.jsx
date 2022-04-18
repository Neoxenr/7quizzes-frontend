import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Modal } from 'antd';

import Question from '../../components/Question/Question';
import Rules from '../../components/Rules/Rules';

import { setVisibleButton, setVisibleModal } from '../../store/actions/actions';

const Game = () => {
  const dispatch = useDispatch();

  const rules = useSelector((state) => state.rules);
  const isVisibleModal = useSelector((state) => state.isVisible.isVisibleModal);

  const handleOk = () => {
    dispatch(setVisibleModal(false));
  };

  const handleCancel = () => {
    dispatch(setVisibleModal(false));
  };

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
