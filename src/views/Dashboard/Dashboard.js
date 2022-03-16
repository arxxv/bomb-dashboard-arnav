import React, { useMemo } from 'react';
import Page from '../../components/Page';
import { createGlobalStyle } from 'styled-components';
import DashboardImage from './images/bg.svg';
import BombFarms from './components/BombFarms';
import Bonds from './components/Bonds';
import BombFinanceSummary from './components/BombFinanceSummary';
import Boardroom from './components/Boardroom';

const BackgroundImage = createGlobalStyle`
  body {
    background: url(${DashboardImage});
    background-size: cover !important;
  }
`;

const Dashboard = () => {
  return (
    <Page>
      <BackgroundImage />
      <BombFinanceSummary />
      <Boardroom />
      <BombFarms />
      <Bonds />
    </Page>
  );
};

export default Dashboard;
