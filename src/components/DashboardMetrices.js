import React from 'react';
import { Box, Grid, Typography, Button, Tabs, Tab, Card, CardContent } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import chartImage from '../assets/chart-card.jpg'; // Adjust the path to your image

const DashboardMetrics = () => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ padding: '20px' }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" component="h1">
          Dashboard
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <SearchIcon />
          <Button variant="outlined">Customize</Button>
          <Button variant="outlined">Export</Button>
        </Box>
      </Box>

      {/* Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={tabValue} onChange={handleChange}>
          <Tab label="Market Analysis" />
          <Tab label="Performance" />
        </Tabs>
      </Box>

      {/* Cards */}
      <Grid container spacing={3}>
        {["Today's revenue", "Today's orders", 'Avg. order value'].map((title, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                {/* Card Content on the left */}
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="subtitle1">{title}</Typography>
                  <Typography variant="h5">{index === 0 ? '$1,280' : index === 1 ? '14' : '$91.42'}</Typography>
                  <Typography color="textSecondary" variant="body2">
                    <span style={{ color: '#3ECF8E' }}>▲ {index === 0 ? '15%' : index === 1 ? '10%' : '20%'}</span> last
                    mth
                  </Typography>
                </CardContent>

                {/* Image on the right */}
                <Box sx={{ flexShrink: 0, width: '30%' }}> {/* Adjust width to control size */}
                  <img
                    src={chartImage}
                    alt="Chart"
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'contain',
                    }}
                  />
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DashboardMetrics;
