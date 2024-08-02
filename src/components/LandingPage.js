import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const RootContainer = styled(Container)({
  textAlign: 'center',
  marginTop: '64px',
});

const Title = styled(Typography)({
  fontWeight: 'bold',
  color: '#1976d2',
});

const Subtitle = styled(Typography)({
  color: '#616161',
  marginBottom: '32px',
});

const StyledButton = styled(Button)({
  padding: '16px 32px',
  fontSize: '1.2rem',
});

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <RootContainer maxWidth="sm">
      <Title variant="h3" component="h1" gutterBottom>
        Welcome to Pantry Tracker
      </Title>
      <Subtitle variant="h5" component="h2" gutterBottom>
        Track your pantry items with ease
      </Subtitle>
      <StyledButton variant="contained" color="primary" onClick={handleGetStarted}>
        Get Started
      </StyledButton>
    </RootContainer>
  );
};

export default LandingPage;
