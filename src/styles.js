// src/styles.js
import { styled } from '@mui/system';
import { Typography, Button, Container } from '@mui/material';

export const RootContainer = styled(Container)({
  textAlign: 'center',
  marginTop: '64px', // theme.spacing(8) equivalent
});

export const Title = styled(Typography)({
  fontWeight: 'bold',
  color: '#1976d2', // theme.palette.primary.main equivalent
});

export const Subtitle = styled(Typography)({
  color: '#616161', // theme.palette.text.secondary equivalent
  marginBottom: '32px', // theme.spacing(4) equivalent
});

export const StyledButton = styled(Button)({
  padding: '16px 32px', // theme.spacing(2, 4) equivalent
  fontSize: '1.2rem',
});
