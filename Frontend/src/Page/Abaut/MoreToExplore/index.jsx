import React from 'react'
import { Grid, Typography, Box } from '@mui/material';
import image1 from "../../../img/imageA7.png";
import image2 from "../../../img/imageA8.png";
import image3 from "../../../img/imageA9.png";

export default function MoreToExplore() {
  return (
    <Box textAlign="center">
    <Typography variant="h5" gutterBottom>
      More to Explore
    </Typography>
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Box>
          <img src={image1} alt="Our Products" style={{ width: '100%', height: 'auto' }} />
          <Typography variant="subtitle1">Our Products</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box>
          <img src={image2} alt="Our Stores" style={{ width: '100%', height: 'auto' }} />
          <Typography variant="subtitle1">Our Stores</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box>
          <img src={image3} alt="Careers" style={{ width: '100%', height: 'auto' }} />
          <Typography variant="subtitle1">Careers</Typography>
        </Box>
      </Grid>
    </Grid>
  </Box>
  )
}
