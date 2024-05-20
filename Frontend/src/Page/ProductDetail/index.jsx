import React, { useEffect, useState } from "react";
import fetchData from "../../Utils/fetchData";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  ImageList,
  ImageListItem,
  Rating,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

export default function ProductDetail() {
  const url = import.meta.env.VITE_BASE_URL;
  const { id, name } = useParams();
  const [product, setProduct] = useState();
  const [rating, setRating] = useState(5);
  useEffect(() => {
    (async () => {
      try {
        const res = await fetchData(`products/${id}?populate=*`);
        setProduct(res.data.attributes);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [id]);
  return (
    <>
      <Grid container xs={12} p={10}>
        <Grid container xs={8}>
          <ImageList
            sx={{ width: 1100, height: 1900 }}
            cols={2}
            rowHeight={264}
          >
            {product?.images?.data?.map((e, index) => (
              <ImageListItem key={index}>
                <img
                  srcSet={url + e?.attributes?.url}
                  src={url + e?.attributes?.url}
                  alt="img"
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
        <Grid  xs={4} px={3}>
          <Grid container xs={12}>
            <Grid xs={9}>
              <Typography variant="h1" color="initial">
                {product?.name}
              </Typography>
              <Grid container>
                <Box display={"flex"} gap={2}>
                  <Grid xs={6}>
                    <Rating name="disabled" value={rating} disabled />
                  </Grid>
                  <Grid xs={6}>
                    <Typography>5.0(2Reviews)</Typography>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
            <Grid sx={3}>{`$ ${product?.price}`}</Grid>
          </Grid>
          <Box sx={{ height: "1px", width: "100%", bgcolor: "primary.bkk" }} />
          <Grid container xs={12}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box>
                <Typography>Color</Typography>
              </Box>
              <Box>
                <Typography>Size</Typography>
              </Box>
              <Button variant="text">ADD TO BAG</Button>
            </Box>
          </Grid>
          <Box sx={{ height: "1px", width: "100%", bgcolor: "primary.bkk" }} />
          <Grid container xs={12}>
            <Grid xs={12}>
              <Box>
                <Box></Box>
              </Box>
              <Box>
                <Box></Box>
              </Box>
              <Box>
                <Box></Box>
              </Box>
            </Grid>
            <Grid container xs={12}>
              <Typography>titel</Typography>
              <Typography>matn</Typography>
            </Grid>
            <Grid container xs={12}>
              <Box>
              <Box></Box>
              <Box></Box>
              </Box>
              <Box>
              <Box></Box>
              <Box></Box>
              </Box>
              <Box>
              <Box></Box>
              <Box></Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
