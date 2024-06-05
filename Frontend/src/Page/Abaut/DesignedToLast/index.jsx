import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import image from "../../../img/imageA4.png";

export default function DesignedToLast() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Typography variant="h5" gutterBottom>
          Designed to last.
        </Typography>
        <Typography>
          At Everlane, we're not big on trends. We want you to wear our pieces
          for years, even decades, to come. That's why we source the finest
          materials and factories for our timeless products like our Grade-A
          cashmere sweaters, Italian shoes, and Peruvian Pima tees.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box display="flex" justifyContent="center">
          <img
            src={image}
            alt="Designed to Last"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      </Grid>
    </Grid>
  );
}
