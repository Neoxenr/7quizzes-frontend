import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';

import Header from '../../components/Header/Header';

import './style.css';

const GameLayout = () => (
  <>
    <Header />
    <Layout.Content className="page">
      <Outlet />
    </Layout.Content>
  </>
);

export default GameLayout;
