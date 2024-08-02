import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';

const StyledContainer = styled(Container)({
  marginTop: '64px',
  textAlign: 'center',
});

const LoginPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleGoogleLogin = (response) => {
    console.log('Google Login Response:', response);
    // Handle Google login here
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    // Hard-coded validation
    if ((username === 'mt' || username === 'email') && password === 'Tafadzwa1') {
      navigate('/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <StyledContainer maxWidth="xs">
      <Typography variant="h4" component="h1" gutterBottom>
        Login
      </Typography>
      {error && (
        <Typography variant="body2" color="error">
          {error}
        </Typography>
      )}
      <form onSubmit={handleLogin}>
        <TextField
          label="Username or Email"
          name="username"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>
      <Typography variant="body2" gutterBottom>
        or
      </Typography>
      <Button variant="outlined" color="primary" fullWidth>
        Sign Up
      </Button>
      <Typography variant="body2" gutterBottom>
        or
      </Typography>
      <GoogleLogin
        clientId="YOUR_GOOGLE_CLIENT_ID"
        buttonText="Login with Google"
        onSuccess={handleGoogleLogin}
        onFailure={handleGoogleLogin}
        cookiePolicy={'single_host_origin'}
      />
      {/* Add similar components for Apple ID and GitHub login */}
    </StyledContainer>
  );
};

export default LoginPage;
