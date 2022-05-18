import React from 'react';
import PropTypes from 'prop-types';

import { Layout } from 'antd';
import Header from '../../components/Header/Header';

import './style.css';

const GameLayout = (props) => (
  <>
    <Header />
    <Layout.Content>{props.children}</Layout.Content>
  </>
);

GameLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default GameLayout;
