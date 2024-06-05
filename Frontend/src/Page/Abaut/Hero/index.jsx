import React from "react";
import { Typography, Box } from '@mui/material';
import imge1 from "../../../img/SectionA2.png"

export default function Hero() {
  return (
    <Box textAlign="center">
      <Box mt={2}>
        <img
          src={imge1}
          alt="Hero"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
    </Box>
  );
}
