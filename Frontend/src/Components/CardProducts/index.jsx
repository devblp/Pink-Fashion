import { Avatar, Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";

export default function index({name, image, price, brand}) {
    const url = import.meta.env.VITE_BASE_URL
  return (
    <>
      <Box>
        <Box>
          <Avatar
            src={url+image}
            sx={{ width: "282px", height: "461px", borderRadius: 0 }}
          />
        </Box>
        <Grid container xs={12} sx={{ p: 1 }}>
          <Grid xs={10}>
            <Typography sx={{ fontSize: "12px" }}>
              {name}
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "primary.bkk" }}>
              {brand? brand:"Feack"}

            </Typography>
            <Box>
                {"colors imge"}
            </Box>
            <Button>
                submit
            </Button>
          </Grid>
          <Grid xs={2}>
            <Typography sx={{ fontSize: "12px" }}>
              $ {price}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
