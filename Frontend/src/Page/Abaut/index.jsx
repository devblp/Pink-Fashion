import React from 'react';
import { Container, Box } from '@mui/material';
import image from "../../img/imageA3.png"
import image2 from "../../img/imageA5.png"

import Hero from "./Hero";
import EthicalApproach from './EthicalApproach';
import DesignedToLast from './DesignedToLast';
import RadicallyTransparent from './RadicallyTransparent';
import MoreToExplore from './MoreToExplore';

export default function Abaut() {
  return (
    <Container maxWidth="lg">
    <Box py={5}>
      <Hero />
      <Box my={5}>
        <EthicalApproach />
      </Box>
      <Box display="flex" justifyContent="center">
          <img
            src={image}
            alt="Designed to Last"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      <Box my={5}>
        <DesignedToLast />
      </Box>
      <Box display="flex" justifyContent="center">
          <img
            src={image2}
            alt="Designed to Last"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      <Box my={5}>
        <RadicallyTransparent />
      </Box>
      <Box my={5}>
        <MoreToExplore />
      </Box>
    </Box>
  </Container>
  )
}

