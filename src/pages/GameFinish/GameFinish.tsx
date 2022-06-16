import React, { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button/Button';
import Result from '../../components/Result/Result';

function GameFinish(): ReactElement {
  const navigate = useNavigate();

  return (
    <>
      <Result />
      <Button
        onClick={() => {
          navigate('/', { replace: true });
        }}
      >
        Play again
      </Button>
    </>
  );
}

export default GameFinish;
