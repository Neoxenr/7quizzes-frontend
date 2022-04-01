import React from 'react';

import PropTypes from 'prop-types';

import './Button.css';

const Button = (props) => (
  <button
    className={`button ${props.className}`}
    disabled={props.disabled}
    onClick={props.onClick}
  >
    {props.children}
  </button>
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
