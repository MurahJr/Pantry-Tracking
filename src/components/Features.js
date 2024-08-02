// src/components/Features.js
import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { RootContainer, Title, Subtitle } from '../styles';

// Example features data
const features = [
  { title: 'Track Inventory', description: 'Keep track of your pantry inventory in real-time.' },
  { title: 'Easy to Use', description: 'User-friendly interface for easy navigation.' },
  { title: 'Get Notifications', description: 'Receive notifications when items are running low.' },
];

function Features() {
  return (
    <RootContainer>
      <Title variant="h4" component="h2" gutterBottom>
        Features
      </Title>
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <Box
                sx={{
                  padding: '16px',
                  borderRadius: '8px',
                  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                }}
              >
                <Typography variant="h6" component="h3">
                  {feature.title}
                </Typography>
                <Typography variant="body1">
                  {feature.description}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </RootContainer>
  );
}

export default Features;
