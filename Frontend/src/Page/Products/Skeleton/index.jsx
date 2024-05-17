import { Avatar, Box, Button, Typography,Skeleton } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { Link } from "react-router-dom";


export default function SkeletonProduct({name, image, price, brand,id}) {
    const url = import.meta.env.VITE_BASE_URL
  return (
    <>
      <Box>
        <Box >
          <Skeleton
            sx={{ width: "282px", height: "461px", borderRadius: 0 }}
          />
        </Box>
        <Grid container xs={12} sx={{ p: 1 }}>
          <Grid xs={10}>
            <Skeleton sx={{ fontSize: "12px" }}/>

            <Skeleton sx={{ fontSize: "12px", color: "primary.bkk" }}/>
            <Skeleton/>
            <Skeleton/>
          </Grid>
          <Grid xs={2}>
            <Skeleton sx={{ fontSize: "12px" }}/>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
