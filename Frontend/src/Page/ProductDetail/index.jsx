import React, { useEffect, useState } from "react";
import fetchData from "../../Utils/fetchData";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  ImageList,
  ImageListItem,
  Rating,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../Sore/Slices/Cart";

export default function ProductDetail() {
  const url = import.meta.env.VITE_BASE_URL;
  const dispatch = useDispatch()
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [categorys,setCategory] =useState()
  const [rating, setRating] = useState(5);
  // const quantity=useSelector(state=>state.Cart.list)?.filter(e=>e.id==id)[0]?.quantity
  const fetchDataAsync = async (url) => {
    try {
      const res = await fetchData(url);
      return res?.data;
    } catch (error) {}
  };
  useEffect(() => {
    (async () => {
      const productDatail = await fetchDataAsync(`products/${id}?populate=*`);
      setProduct(productDatail);
      const categorys = await fetchDataAsync(`categories?populate=*`);
      setCategory(categorys)
    })();
  }, [id]);
  const color =
    categorys?.map((e) => (
      <FormControlLabel
        control={
          <Checkbox
            // checked={filters.categories.includes(e?.attributes?.name)}
            // onChange={handleCategoryChange}
            value={e?.attributes?.name}
          />
        }
        label={
          <Box
            sx={{ width: 20, height: 20, bgcolor: e?.attributes?.name , borderRadius:100 }}
          ></Box>
        }
        key={e?.id}
      />
    )) || [];
    const size =
    categorys?.map((e) => (
      <FormControlLabel
        control={
          <Checkbox
            value={e?.attributes?.name}
          />
        }
        label={e?.attributes?.name}
        key={e?.id}
      />
    )) || [];
    const handleAddToBag = () => {
      dispatch(addItem(product));
    };
  return (
    <>
      <Grid container xs={12} p={10}>
        <Grid container xs={8}>
          <ImageList
            sx={{ width: 1100, height: 1900 }}
            cols={2}
            rowHeight={264}
          >
            {product?.attributes?.images?.data?.map((e, index) => (
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
        <Grid xs={4} px={3}>
          <Grid container xs={12} sx={{alignItems:"center" , justifyContent:"space-between"}}>
            <Grid xs={9}>
              <Typography sx={{fontSize:34 ,fontWeight:400}} variant="h2" color="initial">
                {product?.attributes?.name}
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
            <Grid sx={3}><Typography sx={{fontSize:24 ,fontWeight:400}}>{`$${product?.attributes?.price}`}</Typography></Grid>
          </Grid>
          <Box sx={{ height: "1px", width: "100%", bgcolor: "primary.bkk" ,my:"50px"}} />
          <Grid container xs={12} >
            <Box sx={{ display: "flex", flexDirection: "column" ,gap:5}}>
              <Box>
                <Typography>Color</Typography>
                <Box>{color.slice(8, 12)}</Box>
              </Box>
              <Box>
                <Typography>Size</Typography>
                <Box>{size.slice(12,17)}</Box>
              </Box>
              
              <Button variant="contained" onClick={handleAddToBag}>ADD TO BAG</Button>
            </Box>
          </Grid>
          <Box sx={{ height: "1px", width: "100%", bgcolor: "primary.bkk",my:"50px" }} />
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
              <Typography variant="h6">
                Part shirt, part jacket, all style.
              </Typography>
              <Typography>{product?.attributes?.description}</Typography>
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
