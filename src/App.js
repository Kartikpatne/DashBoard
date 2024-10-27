import React from 'react';
import { Grid, Container } from '@mui/material';
import Sidebar from './components/Sidebar';
import DashboardMetrics from './components/DashboardMetrices';
import Opportunities from './components/Opportunities';
import MarketTrends from './components/MarketTrends';
import Visibility from './components/Visibility';
import Trending from './components/Trending';

const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flexGrow: 1 }}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <DashboardMetrics />
            </Grid>
            <Grid item xs={12} md={6}>
              <Opportunities />
            </Grid>
            <Grid item xs={12} md={6}>
              <MarketTrends />
            </Grid>
            <Grid item xs={12} md={6}>
              <Trending/>
            </Grid>
            <Grid item xs={12} md={6}>
              <Visibility />
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default App;
