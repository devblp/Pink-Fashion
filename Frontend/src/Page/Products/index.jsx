import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Breadcrumbs,
  Checkbox,
  FormGroup,
  FormControlLabel,
  FormLabel,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Link, useParams } from "react-router-dom";
import fetchData from "../../Utils/fetchData";
import CardProducts from "../../Components/CardProducts";
import SkeletonProduct from "./Skeleton";

export default function Products() {
  const [products, setProducts] = useState();
  const [categorys, setSategorys] = useState();
  const { catgoryId, catgoryName } = useParams();
  const [filters, setFilters] = useState({
    categories: [],
    colors: [],
    sizes: {
      waist: [],
      clothing: [],
    },
  });

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
      setSategorys(category);
      let filtersUrl = "";
      if (filters.categories.length > 0) {
        const categoryNamesFilter = filters.categories
          .map(encodeURIComponent)
          .join(",");
        filtersUrl += `&filters[categories][name][$in]=${categoryNamesFilter}`;
      }

      const productsData = await fetchDataAsync(
        `products?populate=*${
          catgoryId === "all-product"
            ? ""
            : `&filters[categories][id][$eq]=${catgoryId}`
        }${filtersUrl}`
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
            attributesColor={e?.attributes?.categories?.data?.map(category => category?.attributes?.name) || []}

          />
        )) || [];
      setProducts(product);
    })();
  }, [catgoryId, filters.categories]);

  // --------filter start

  const handleCategoryChange = async (event) => {
    const { checked, value } = event.target;
    setFilters({
      categories: [],
      colors: [],
      sizes: {
        waist: [],
        clothing: [],
      },
    });
    setFilters((prev) => ({
      ...prev,
      categories: checked
        ? [...prev.categories, value]
        : prev.categories.filter((cat) => cat !== value),
    }));
  };

  const handleFilterReset = () => {
    setFilters({
      categories: [],
      colors: [],
      sizes: {
        waist: [],
        clothing: [],
      },
    });
  };

  const categoriese =
    categorys?.map((e) => (
      <FormControlLabel
        control={
          <Checkbox
            checked={filters.categories.includes(e?.attributes?.name)}
            onChange={handleCategoryChange}
            value={e?.attributes?.name}
          />
        }
        label={e?.attributes?.name}
        key={e?.id}
      />
    )) || [];
  const color =
    categorys?.map((e) => (
      <FormControlLabel
        control={
          <Checkbox
            checked={filters.categories.includes(e?.attributes?.name)}
            onChange={handleCategoryChange}
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
            checked={filters.categories.includes(e?.attributes?.name)}
            onChange={handleCategoryChange}
            value={e?.attributes?.name}
          />
        }
        label={e?.attributes?.name}
        key={e?.id}
      />
    )) || [];
  return (
    <>
      <Grid container xs={12} sx={{ p: 10 }}>
        <Grid xs={3}>
          <Grid container spacing={2} direction="column">
            <Grid item>
              <Accordion expanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <FormLabel>Category</FormLabel>
                </AccordionSummary>
                <AccordionDetails>
                  <FormGroup>{categoriese.slice(0, 8)}</FormGroup>
                  <Button>View More +</Button>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item>
              <Accordion expanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <FormLabel>Color</FormLabel>
                </AccordionSummary>
                <AccordionDetails>
                  <FormGroup row>{color.slice(8, 12)}</FormGroup>
                  <Button>View More +</Button>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item>
              <Accordion expanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <FormLabel>Size</FormLabel>
                </AccordionSummary>
                <AccordionDetails>
                  <FormLabel component="legend">Clothing</FormLabel>
                  <FormGroup row>{size.slice(12,17)}</FormGroup>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={handleFilterReset}
              >
                Reset Filters
              </Button>
            </Grid>
          </Grid>
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
