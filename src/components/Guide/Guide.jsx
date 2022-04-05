import React from 'react';
import PropTypes from 'prop-types';

import { List } from 'antd';

import './style.css';

const Guide = (props) => (
  <div className="guide">
    <header className="guide__title">Game rules</header>
    <List
      className="guide__rules"
      dataSource={props.rules}
      renderItem={(item, index) => (
        <List.Item>{`${index + 1}. ${item}`}</List.Item>
      )}
    />
  </div>
);

Guide.propTypes = {
  rules: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Guide;
