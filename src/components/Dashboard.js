import React from 'react';
import { Container, Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="body1">
        Manage and track items in your pantry. Add, update, remove, and search your pantry items all in one place.
      </Typography>
    </Container>
  );
};

export default Dashboard;
