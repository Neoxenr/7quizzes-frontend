import React, { ReactElement } from 'react';
import { I18n } from 'react-redux-i18n';
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
        {I18n.t('page.game-finish.buttonAgain')}
      </Button>
    </>
  );
}

export default GameFinish;
