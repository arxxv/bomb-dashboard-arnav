import React, { useMemo } from 'react';
import Page from '../../components/Page';
import { createGlobalStyle } from 'styled-components';
import DashboardImage from './images/bg.svg';
import BombFarms from './components/BombFarms';
import Bonds from './components/Bonds';
import BombFinanceSummary from './components/BombFinanceSummary';

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
      {/* <BombFinanceSummary /> */}
      <BombFarms />
      <Bonds />
    </Page>
  );
};

export default Dashboard;
