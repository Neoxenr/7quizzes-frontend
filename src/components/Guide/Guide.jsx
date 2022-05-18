import React from 'react';
import PropTypes from 'prop-types';

import { List } from 'antd';
import { useNavigate } from 'react-router-dom';

import Button from '../Button/Button';

import './style.css';

const Guide = (props) => {
  const navigate = useNavigate();

  return (
    <div className="guide">
      <header className="guide__title">Game rules</header>
      <List
        className="guide__rules"
        dataSource={props.rules}
        renderItem={(item, index) => (
          <List.Item>{`${index + 1}. ${item}`}</List.Item>
        )}
      />
      <Button className="button" onClick={() => navigate('/game')}>Start</Button>
    </div>
  );
};

Guide.propTypes = {
  rules: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Guide;
