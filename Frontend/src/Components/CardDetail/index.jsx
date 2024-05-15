import {
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
    CardMedia,
    Rating,
    Box,
  } from "@mui/material";
  import StarIcon from "@mui/icons-material/Star";
  import React, { useState } from "react";
  
  
  export default function CardDetail({ title, image, current, brandName }) {
    const [valueRating, setValueRating] = useState(3);
    return (
      <>
        <
        <Card
          sx={{
            width: "346px",
            height: "438px",
            borderRadius: "10px",
            p: "20px",
          }}
        >
           <CardMedia
            component="img"
            alt="green iguana"
            width="336px"
            height="244px"
            image={import.meta.env.VITE_BASE_URL + image}
            sx={{ borderRadius: "10px" }}
          />
          <CardContent>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontFamily: "Acme" }}
              >
                {title}
              </Typography>
              <Rating
                name="hover-feedback"
                value={valueRating}
                emptyIcon={<StarIcon sx={{ opacity: 0.55 }} />}
                onChange={(event, newHaver) => {
                  setValueRating(newHaver);
                }}
                precision={1}
              />
            </Box>
            <Typography
              gutterBottom
              component="div"
              sx={{
                fontFamily: "Acme",
                fontSize: "12px",
                color: "text.secondary",
              }}
            >
              {brandName}
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              sx={{ fontFamily: "Acme", fontWeight: 600 }}
            >
              (4.1k) Customer Reviews
            </Typography>
          </CardContent>
          <CardActions
            sx={{ display: "flex", justifyContent: "space-between", p: 2 }}
          >
            <Typography gutterBottom sx={{ fontFamily: "Acme" }}>
              $ {current}
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: "#FFAFCF",
                borderRadius: 5,
                color: "black",
                "&:hover": { bgcolor: "#FFAFCF" },
                fontFamily: "Acme",
                fontSize: "10px",
              }}
              
            >
              Buy
            </Button>
          </CardActions>
        </Card>
      </>
    );
  }
  
  
  