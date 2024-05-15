import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Link } from "react-router-dom";
import "./style.css"

export default function CardCategory({ name, image }) {
  const url = import.meta.env.VITE_BASE_URL;
  return (
    <>
      <Grid xs={1.2}  >
        <Link className="link-style-card_category">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              "&:hover": { color: "primary.main" },
            }}
          >
            <Avatar
              sx={{ borderRadius: 0, width: "180px", height: "263px" }}
              src={url + image}
            />
            <Typography py={"10px"}>{name}</Typography>
          </Box>
        </Link>
      </Grid>
    </>
  );
}
