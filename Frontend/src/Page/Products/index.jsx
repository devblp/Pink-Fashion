import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Breadcrumbs,
  Select,
  MenuItem,
  OutlinedInput,
  Autocomplete,
  TextField,
  Checkbox,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormLabel,
  Button,
} from "@mui/material";

import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Link, useParams } from "react-router-dom";
import fetchData from "../../Utils/fetchData";
import CardProducts from "../../Components/CardProducts";
import SkeletonProduct from "./Skeleton";
import FilterComponent from "./Filters";
export default function Products() {

  const [categoryNames, setCategoryNames] = useState();
  const [valeuNames, setValeuNames] = useState(null);
  const [categoryColor, setCategoryColor] = useState();
  const [categorySize, setCategorySize] = useState();
  const [products, setProducts] = useState();
  const { catgoryId, catgoryName } = useParams();

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
      const category = await fetchDataAsync(`categories?populate=*`);
      const nameCategory = category?.map((e) => e?.attributes?.name) || [];
      setCategoryNames(nameCategory.slice(0, 7));
      setCategoryColor(nameCategory.slice(8, 11));
      setCategorySize(nameCategory.slice(12, 16));
      const productsData = await fetchDataAsync(
        `products?populate=*${
          catgoryId === "all-product"
            ? ""
            : `&filters[categories][id][$eq]=${catgoryId}`
        }${
          valeuNames
            ? `&filters[categories][id][$eq]=${valeuNames !== "women" ? 1 : 2}`
            : ""
        }`
      );

      const product =
        productsData?.map((e, index) => (
          <CardProducts
            key={index}
            id={e?.id}
            name={e?.attributes?.name}
            price={e?.attributes?.price}
            image={e?.attributes?.images?.data[0]?.attributes?.url}
            brand={e?.attributes?.brand}
          />
        )) || [];
      setProducts(product);
    })();
  }, [catgoryId, valeuNames]);
  const lengthProduct = products?.length;



  // --------filter start
  
  return (
    <>
      <Grid container xs={12} sx={{ p: 10 }}>
        <Grid xs={3}>
          <FilterComponent/>
        </Grid>
        <Grid container xs={9} sx={{ px: 2 }}>
          <Grid xs={12}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link to={"/"}>Home</Link>
              <Typography color="text.primary">Products</Typography>
            </Breadcrumbs>
            <Typography fontSize={"30px"}>
              Men’s Clothing & Apparel - New Arrivals
            </Typography>
            <Typography>Featured</Typography>
          </Grid>

          {products ? (
            <>
              <Grid
                container
                xs={12}
                sx={{ width: "100%", gap: 2, py: 10, justifyContent: "center" }}
              >
                {products}
              </Grid>
            </>
          ) : (
            <SkeletonProduct />
          )}
        </Grid>
      </Grid>
    </>
  );
}
