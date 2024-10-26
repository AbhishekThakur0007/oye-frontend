import React from 'react';
import {  Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Container 
      maxWidth="md" 
      sx={{
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center'
      }}
    >
      <Typography variant="h1" color="primary" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" color="textSecondary" gutterBottom>
        Oops! The page you're looking for doesn't exist.
      </Typography>
      <Typography variant="body1" color="textSecondary" sx={{ marginBottom: 3 }}>
        You may have mistyped the address or the page may have moved.
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleGoHome} 
        sx={{ paddingX: 4 }}
      >
        Go to Home Or Login First
      </Button>
    </Container>
  );
};

export default NotFound;

