import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Unstable_Grid2";

export default function index() {
  return (
    <>
      <Grid xs={2} sx={{ display: "flex", justifyContent: "center" }}>
        <Box>
          <Avatar src={""} />
          <Typography>{""}</Typography>
        </Box>
      </Grid>
    </>
  );
}
