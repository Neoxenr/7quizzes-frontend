import React from 'react';

import PropTypes from 'prop-types';

import { Button as ButtonAntd } from 'antd';

import './style.css';

const Button = (props) => (
  <ButtonAntd
    shape="round"
    htmlType={props.htmlType}
    type={props.type}
    className={`button ${props.className}`}
    disabled={props.disabled}
    onClick={props.onClick}
  >
    {props.children}
  </ButtonAntd>
);

Button.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.string,
  type: PropTypes.string,
  htmlType: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  disabled: false,
  children: '',
  htmlType: 'button',
  type: 'primary',
  onClick: () => { },
};

export default Button;
