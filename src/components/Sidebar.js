import React from 'react';
import { Drawer, List, ListItem, IconButton, Avatar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LayersIcon from '@mui/icons-material/Layers';
import BarChartIcon from '@mui/icons-material/BarChart';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import TimerIcon from '@mui/icons-material/AccessTime';

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: '80px',
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: '80px',
          boxSizing: 'border-box',
          backgroundColor: '#2E3B55',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '20px',
        },
      }}
    >
      <List sx={{ padding: 0 }}>
        {/* Logo or top icon */}
        <ListItem sx={{ justifyContent: 'center', marginBottom: '30px' }}>
          <IconButton>
            <Avatar sx={{ backgroundColor: '#1a73e8' }}>A</Avatar> {/* Placeholder Avatar */}
          </IconButton>
        </ListItem>

        {/* List of sidebar icons */}
        <ListItem sx={{ justifyContent: 'center' }}>
          <IconButton sx={{ color: '#fff' }}>
            <HomeIcon />
          </IconButton>
        </ListItem>

        <ListItem sx={{ justifyContent: 'center' }}>
          <IconButton sx={{ color: '#fff' }}>
            <DashboardIcon />
          </IconButton>
        </ListItem>

        <ListItem sx={{ justifyContent: 'center' }}>
          <IconButton sx={{ color: '#fff' }}>
            <LayersIcon />
          </IconButton>
        </ListItem>

        <ListItem sx={{ justifyContent: 'center' }}>
          <IconButton sx={{ color: '#fff' }}>
            <BarChartIcon />
          </IconButton>
        </ListItem>

        <ListItem sx={{ justifyContent: 'center' }}>
          <IconButton sx={{ color: '#fff' }}>
            <TimerIcon />
          </IconButton>
        </ListItem>

        <ListItem sx={{ justifyContent: 'center' }}>
          <IconButton sx={{ color: '#fff' }}>
            <PeopleIcon />
          </IconButton>
        </ListItem>

        {/* Spacer */}
        <div style={{ flexGrow: 1 }}></div>

        {/* Bottom icons */}
        <ListItem sx={{ justifyContent: 'center' }}>
          <IconButton sx={{ color: '#fff' }}>
            <SettingsIcon />
          </IconButton>
        </ListItem>

        {/* Profile Avatar */}
        <ListItem sx={{ justifyContent: 'center', paddingTop: '20px', paddingBottom: '20px' }}>
          <IconButton>
            <Avatar src="/static/images/avatar/1.jpg" />
          </IconButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;

