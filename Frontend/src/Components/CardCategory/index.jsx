import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Unstable_Grid2";

export default function index({name,image}) {
    const url = import.meta.env.VITE_BASE_URL 
  return (
    <>
      <Grid xs={1.2} >
        <Box sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
          <Avatar sx={{borderRadius:0,width:"212.67px",height:"263px"}}  src={url + image} />
          <Typography>{name}</Typography>
        </Box>
      </Grid>
    </>
  );
}
