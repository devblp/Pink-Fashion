import React, { useEffect, useState } from "react";
import {
  Checkbox,
  FormGroup,
  FormControlLabel,
  FormLabel,
  Button,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import fetchData from "../../../Utils/fetchData";
import useFormHandel from "../../../Utils/useFilterHandel";

const FilterComponent = () => {
  const [dataCategorie, setDataCategorie] = useState([]);
  console.log(dataCategorie);
  const [setFilterId] = useFormHandel();
  const [filters, setFilters] = useState({
    categories: [],
    colors: [],
    sizes: {
      waist: [],
      clothing: [],
    },
  });
  console.log(filters.categories);
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

    // Fetch data based on selected category
    if (checked) {
      const filteredData = await fetchDataAsync(
        `products?populate=*${`&filters[categories][id][$eq]=${catgoryId}`}`
      );
      setFilterId(filteredData);
    } else {
      setFilterId([]); // Clear filtered data if category is unchecked
    }
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

  return (
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
                      style={{ width: 20, height: 20, backgroundColor: color }}
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
              {["36", "38", "40", "42", "44", "46", "48", "50"].map((size) => (
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
              ))}
            </FormGroup>
            <FormLabel component="legend">Clothing</FormLabel>
            <FormGroup row>
              {["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"].map((size) => (
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
              ))}
            </FormGroup>
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" onClick={handleFilterReset}>
          Reset Filters
        </Button>
      </Grid>
    </Grid>
  );
};

export default FilterComponent;
