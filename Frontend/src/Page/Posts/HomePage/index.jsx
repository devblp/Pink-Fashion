import React from "react";
import { Container, Grid, Typography, Box,Button } from "@mui/material";
import BlogCard from "../BlogCard";
import Footer from "../Footer";

export default function index() {
  return (
    <>
      
      <Container>
        <Box textAlign="center" my={5}>
          <Typography variant="h3" gutterBottom>
            everworld
          </Typography>
          <Typography variant="subtitle1">
            We’re on a mission to clean up a dirty industry. These are the
            people, stories, and ideas that will help us get there.
          </Typography>
        </Box>

        <Typography variant="h4" gutterBottom>
          The Latest
        </Typography>

        <Grid container justifyContent={"center"} >
          <Grid container xs={5} gap={5}>
            <BlogCard/>
          </Grid>
        </Grid>

        <Box textAlign="center" mt={5}>
          <c variant="contained">Load more Articles</c>
        </Box>

        <Typography variant="h4" gutterBottom mt={5}>
          Keep it Clean
        </Typography>
        <Typography variant="h3" textAlign="center">
          ♻️ Do right by people ♻️ Keep It Clean ♻️
        </Typography>

        <Typography variant="h4" gutterBottom mt={5}>
          Our Progress
        </Typography>

        <Grid container justifyContent={"center"} >
          <Grid container xs={5} gap={5}>
            <BlogCard/>
          </Grid>
        </Grid>
      </Container>
      <Footer/>
    </>
  );
}
