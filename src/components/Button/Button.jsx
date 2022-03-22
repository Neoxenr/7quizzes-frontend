import React from 'react';

import PropTypes from 'prop-types';

import './Button.css';

const Button = (props) => (
  <button
    className={`button ${props.className}`}
    disabled={props.disabled}
    style={props.disabled ? { cursor: 'pointer' } : {}}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
};

export default Button;
