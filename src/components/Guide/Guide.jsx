import React from 'react';
import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';

import Button from '../Button/Button';
import Rules from '../Rules/Rules';

import './style.css';

const Guide = (props) => {
  const navigate = useNavigate();
  return (
    <div className="guide">
      <header className="guide__title">Game rules</header>
      <Rules rules={props.rules} />
      <Button className="button" onClick={() => navigate('/game')}>Start</Button>
    </div>
  );
};

Guide.propTypes = {
  rules: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Guide;
