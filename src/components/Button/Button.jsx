import React from 'react';

import PropTypes from 'prop-types';

import { Button as ButtonAntd } from 'antd';

import './style.css';

const Button = (props) => (
  <ButtonAntd
    type="primary"
    shape="round"
    className={props.className}
    disabled={props.disabled}
    onClick={props.onClick}
  >
    {props.children}
  </ButtonAntd>
);

Button.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  disabled: false,
  children: '',
};

export default Button;
