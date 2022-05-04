import React from 'react';

import PropTypes from 'prop-types';

import logo from './img/7Quizzes.svg';

const Logo = ({ className }) => <img className={className} src={logo} alt="7Quizzes logo" />;

Logo.propTypes = {
  className: PropTypes.string,
};

Logo.defaultProps = {
  className: '',
};

export default Logo;
