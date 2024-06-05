import React from "react";
import { Box, Typography, Button } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "black",
        color: "white",
        mt: 3,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        p: 10,
      }}
    >
      <Typography variant="h4">Follow us on social for more</Typography>
      <Box>
        <Button variant="contained" color="primary">
          @Everlane Instagram
        </Button>
      </Box>
    </Box>
  );
}
