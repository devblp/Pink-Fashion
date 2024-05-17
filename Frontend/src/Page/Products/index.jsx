import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Typography,
  Breadcrumbs,
  FormControl,
  Select,
  MenuItem,
  OutlinedInput,
  Autocomplete,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Link } from "react-router-dom";
import fetchData from "../../Utils/fetchData";
import CardProducts from "../../Components/CardProducts"


export default function Products() {
 
  const [categoryNames, setCategoryNames] = useState();
  const [valeuNames,setValeuNames] = useState();
  const [categoryColor, setCategoryColor] = useState();
  const [categorySize, setCategorySize] = useState();
  const [products,setProducts] = useState()
  console.log(products);

  const fetchDataAsync = async (url) => {
    try {
      const res = await fetchData(url);
      return res.data;
    } catch (error) {
      console.error(`Error fetching ${url}:`, error);
    }
  };

  useEffect(() => {
    (async () => {
      const category = await fetchDataAsync("categories?populate=*");
      const nameCategory = category?.map((e) => e?.attributes?.name) || [];
      setCategoryNames(nameCategory.slice(0, 7));
      setCategoryColor(nameCategory.slice(8, 11));
      setCategorySize(nameCategory.slice(12, 16));
      const productsData = await fetchDataAsync("products?populate=*")
      const  product = productsData?.map((e,index)=>(<CardProducts key={index} name={e?.attributes?.name} price={e?.attributes?.price} image={e?.attributes?.images?.data[0]?.attributes?.url} brand={e?.attributes?.brand} /> )) || []
      setProducts(product)
    })();
  }, []);
  const lengthProduct = products?.length
  return (
    <>
      <Grid container xs={12} sx={{p:10 }}>
        <Grid xs={3} >
          <Typography sx={{py:2}}>{lengthProduct} Products</Typography>
          <Grid xs={12} sx={{p:"50px 0px 280px 0px"}}>
            <Autocomplete
              id="controllable-states-demo"
              value={valeuNames}
              onChange={(event, newValue) => {
                setValeuNames(newValue);
              }}
              options={categoryNames?.map((name) => name)}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Name" />
              )}
            />
          </Grid>
          <Grid xs={12} sx={{p:"0px 0px 180px 0px"}}>
          <Autocomplete
              id="controllable-states-demo"

              options={categoryColor?.map((name) => name)}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Color" />
              )}
            />
          </Grid>
          <Grid xs={12} sx={{p:"0px 0px 100px 0px"}}>
          <Autocomplete
              id="controllable-states-demo"
              options={categorySize?.map((name) => name)}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Size" />
              )}
            />
          </Grid>
        </Grid>
        <Grid container xs={9} sx={{px:2}}>
          <Grid xs={12}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link to={"/"}>Home</Link>
              <Typography color="text.primary">Products</Typography>
            </Breadcrumbs>
            <Typography fontSize={"30px"}>Men’s Clothing & Apparel - New Arrivals</Typography>
            <Typography>Featured</Typography>
          </Grid>
          <Grid container xs={12} sx={{gap:4,py:10}}>
              {products}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
