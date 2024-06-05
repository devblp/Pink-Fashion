import React from 'react'
import { Grid, Typography, Box } from '@mui/material';
import image from "../../../img/imageA1.png"

export default function EthicalApproach() {
  return (
    <Grid container spacing={2}>
    <Grid item xs={12} md={6}>
      <Box display="flex" justifyContent="center">
        <img src={image} alt="Ethical Approach" style={{ width: '100%', height: 'auto' }} />
      </Box>
    </Grid>
    <Grid item xs={12} md={6}>
      <Typography variant="h5" gutterBottom>
        Our ethical approach.
      </Typography>
      <Typography>
        We spend months finding the best factories around the world—the same ones that produce your favorite designer labels.
        We visit them often and build strong personal relationships with the owners. Each factory is given a compliance audit to
        evaluate factors like fair wages, reasonable hours, and environment. Our goal? A score of 90 or above for every factory.
      </Typography>
    </Grid>
  </Grid>
  )
}
