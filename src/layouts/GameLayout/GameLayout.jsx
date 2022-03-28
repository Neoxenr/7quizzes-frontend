import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/Header/Header';

import './style.css';

const GameLayout = (props) => (
  <>
    <Header />
    <main className="page">
      {props.children}
    </main>
  </>
);

GameLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default GameLayout;
