import React from 'react';

import PropTypes from 'prop-types';

import { Button } from 'antd';

import './style.css';

const ButtonAntd = (props) => (
  <Button
    type="primary"
    shape="round"
    size="middle"
    className={`button ${props.className}`}
    disabled={props.disabled}
    onClick={props.onClick}
  >
    {props.children}
  </Button>
);

ButtonAntd.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string,
};

ButtonAntd.defaultProps = {
  className: '',
  disabled: false,
  children: '',
};

export default ButtonAntd;
