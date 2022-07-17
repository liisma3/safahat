import React from 'react';
import { StatsIcon, Card, Typography } from '@/components/shared/styled/profile.styled';
import { CardContent, Box, LinearProgress } from '@mui/material';
import { ShoppingBag } from 'react-feather';

export default function Order() {
  return (
    <Box position="relative">
      <Card >
        <CardContent>
          <Typography variant="h2" gutterBottom>
            <Box fontWeight="fontWeightRegular">30</Box>
          </Typography>
          <Typography variant="body2" gutterBottom mt={3} mb={0}>
            Orders Today
          </Typography>

          <StatsIcon>
            <ShoppingBag />
          </StatsIcon>
          <LinearProgress variant="determinate" value={30} color="secondary" />
        </CardContent>
      </Card>
    </Box>
  );
}
