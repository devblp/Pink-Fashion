import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import image from "../../../img/Screenshot 2023-11-30 at 6.28 1A6.png";

export default function RadicallyTransparent() {
  return (
    <Box textAlign="center">
      <Typography variant="h5" gutterBottom>
        Radically Transparent.
      </Typography>
      <Typography>
        We believe our customers have a right to know how much their clothes
        cost to make. We reveal the true costs behind all of our products—from
        materials to labor to transportation—then offer them to you, minus the
        traditional retail markup.
      </Typography>
      <Box mt={2}>
        <img
          src={image}
          alt="Radically Transparent"
          style={{ width: "50%", height: "auto" }}
        />
      </Box>
    </Box>
  );
}
