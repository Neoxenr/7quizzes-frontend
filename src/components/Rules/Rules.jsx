import React from 'react';
import PropTypes from 'prop-types';

import { List } from 'antd';

import './style.css';

const Rules = (props) => (
  <List
    className="rules"
    dataSource={props.rules}
    renderItem={(item, index) => (
      <List.Item>{`${index + 1}. ${item.ruleText}`}</List.Item>
    )}
  />
);

Rules.propTypes = {
  rules: PropTypes.arrayOf(PropTypes.exact({
    ruleId: PropTypes.string,
    ruleText: PropTypes.string
  })).isRequired,
};

export default Rules;
