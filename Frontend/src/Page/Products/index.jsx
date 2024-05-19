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

  
  const [categoryNames, setCategoryNames] = useState();
  const [categoryColor, setCategoryColor] = useState();
  const [categorySize, setCategorySize] = useState();
  const [products, setProducts] = useState();
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
      const nameCategory = category?.map((e) => e?.attributes?.name) || [];
      setCategoryNames(nameCategory.slice(0, 7));
      setCategoryColor(nameCategory.slice(8, 11));
      setCategorySize(nameCategory.slice(12, 16));
      const productsData = await fetchDataAsync(
        `products?populate=*${
          catgoryId === "all-product"? ""
            : `&filters[categories][id][$eq]=${catgoryId}`
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
  }, [catgoryId, filters.categories]);
  const lengthProduct = products?.length;

  // --------filter start

  const [dataCategorie, setDataCategorie] = useState([]);
  console.log(dataCategorie);
  console.log(filters.categories);

  useEffect(() => {
    (async () => {
      const categories = await fetchDataAsync(`categories?populate=*`);
      setDataCategorie(categories);
    })();
  }, []);

  const handleCategoryChange = async (event) => {
    const { checked, value } = event.target;
    setFilters((prev) => ({
      ...prev,
      categories: checked
        ? [...prev.categories, value]
        : prev.categories.filter((cat) => cat !== value),
    }));
    
  };
  const handleColorChange = (event) => {
    const { checked, value } = event.target;
    setFilters((prev) => ({
      ...prev,
      colors: checked
        ? [...prev.colors, value]
        : prev.colors.filter((color) => color !== value),
    }));
  };

  const handleSizeChange = (event, type) => {
    const { checked, value } = event.target;
    setFilters((prev) => ({
      ...prev,
      sizes: {
        ...prev.sizes,
        [type]: checked
          ? [...prev.sizes[type], value]
          : prev.sizes[type].filter((size) => size !== value),
      },
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
    dataCategorie?.map((e) => (
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
  const colors = ""
  const size = ""
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
                  <FormGroup row>
                    {[
                      "black",
                      "green",
                      "blue",
                      "brown",
                      "orange",
                      "pink",
                      "red",
                      "white",
                      "yellow",
                    ].map((color) => (
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={filters.colors.includes(color)}
                            onChange={handleColorChange}
                            value={color}
                          />
                        }
                        label={
                          <div
                            style={{
                              width: 20,
                              height: 20,
                              backgroundColor: color,
                            }}
                          ></div>
                        }
                        key={color}
                      />
                    ))}
                  </FormGroup>
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
                  <FormLabel component="legend">Waist</FormLabel>
                  <FormGroup row>
                    {["36", "38", "40", "42", "44", "46", "48", "50"].map(
                      (size) => (
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={filters.sizes.waist.includes(size)}
                              onChange={(e) => handleSizeChange(e, "waist")}
                              value={size}
                            />
                          }
                          label={size}
                          key={size}
                        />
                      )
                    )}
                  </FormGroup>
                  <FormLabel component="legend">Clothing</FormLabel>
                  <FormGroup row>
                    {["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"].map(
                      (size) => (
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={filters.sizes.clothing.includes(size)}
                              onChange={(e) => handleSizeChange(e, "clothing")}
                              value={size}
                            />
                          }
                          label={size}
                          key={size}
                        />
                      )
                    )}
                  </FormGroup>
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
