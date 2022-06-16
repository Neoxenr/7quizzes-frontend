import React, { FC, ReactElement, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import { Modal } from 'antd';

import {
  useGetQuestionQuery,
  useGetRoomsQuery,
  useGetRulesQuery,
} from '../../api';
import { setVisibleButton, setVisibleModal } from '../../store/slices';

import Question from '../../components/Question/Question';
import Rules from '../../components/Rules/Rules';

const Game: FC = (): ReactElement => {
  const dispatch = useDispatch();

  const isVisibleModal = useSelector(
    (state: RootState) => state.visible.isVisibleModal,
    shallowEqual,
  );

  const { data: getRulesDto } = useGetRulesQuery();
  const { data: rooms } = useGetRoomsQuery();

  const roomId = rooms?.[rooms.length - 1].roomId;
  const questionId = useSelector((state: RootState) => state.game.questionId);

  const { data: question, isLoading } = useGetQuestionQuery({
    roomId,
    questionId,
  });

  const handleOk = () => {
    dispatch(setVisibleModal(false));
  };

  const handleCancel = () => {
    dispatch(setVisibleModal(false));
  };

  useEffect(() => {
    return () => {
      dispatch(setVisibleButton(false));
    };
  }, [dispatch, roomId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* @ts-ignore */}
      <Modal
        centered
        width={1200}
        visible={isVisibleModal}
        onOk={handleOk}
        onCancel={handleCancel}>
        <Rules rules={getRulesDto?.rules} />
      </Modal>
      <Question question={question} />
    </>
  );
};

export default Game;
