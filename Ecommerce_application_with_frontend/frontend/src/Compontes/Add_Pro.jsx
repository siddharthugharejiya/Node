import React, { useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";
import { Asidebar } from "./Asidebar";
import { useParams } from "react-router-dom";
import {
  Container,
  TextField,
  Button,
  Typography,
  MenuItem,
  Grid,
  Paper,
  Box,
} from "@mui/material";


export function Add_Pro() {
  const [state, setState] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
    category: "",
    subcategory: "",
  });
  const [update, setUpdate] = useState(true);

  const change = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const Token = localStorage.getItem("Token");
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:9596/product/${id}`)
        .then((res) => res.json())
        .then((res) => {
          setState({
            name: res.data.name,
            image: res.data.image,
            price: res.data.price,
            description: res.data.description,
            category: res.data.category,
            subcategory: res.data.subcategory,
          });
        });
      setUpdate(false);
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!update) {
        await fetch(`http://localhost:9596/product/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(state),
        });
        alert("Product updated successfully!");
      } else {
        await fetch("http://localhost:9596/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Token}`,
          },
          body: JSON.stringify(state),
        });
        alert("Product added successfully!");
      }
      setUpdate(true);
    } catch (error) {
      alert("Backend server error.");
    }
  };

  const [category, setCategory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);

  useLayoutEffect(() => {
    axios.get(`http://localhost:9596/getCategory`).then((res) => {
      setCategory(res.data.data);
    });
  }, []);

  useLayoutEffect(() => {
    axios.get(`http://localhost:9596/subget`).then((res) => {
      setSubcategory(res.data.data);
    });
  }, []);

  return (
    <Box display="flex" minHeight="100vh">
    
      <Box width="240px" bgcolor="lightgray" p={2}>
        <Asidebar />
      </Box>

    
      <Box flex={1} p={4} bgcolor="#f7f8fa">
        <Container maxWidth="sm">
          <Paper elevation={3} sx={{ padding: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
              {update ? "Add Product" : "Update Product"}
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                {/* Product Name */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Product Name"
                    name="name"
                    value={state.name}
                    onChange={change}
                    variant="outlined"
                    required
                  />
                </Grid>

                {/* Image URL */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Image URL"
                    name="image"
                    value={state.image}
                    onChange={change}
                    variant="outlined"
                    required
                  />
                </Grid>

                {/* Price */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Price"
                    name="price"
                    value={state.price}
                    onChange={change}
                    variant="outlined"
                    required
                    type="number"
                  />
                </Grid>

                {/* Description */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Description"
                    name="description"
                    value={state.description}
                    onChange={change}
                    variant="outlined"
                    multiline
                    rows={4}
                    required
                  />
                </Grid>

                {/* Category */}
                <Grid item xs={12}>
                  <TextField
                    select
                    fullWidth
                    label="Category"
                    name="category"
                    value={state.category}
                    onChange={change}
                    variant="outlined"
                    required
                  >
                    <MenuItem value="">Select Category</MenuItem>
                    {category.map((el) => (
                      <MenuItem key={el._id} value={el._id}>
                        {el.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                {/* Subcategory */}
                <Grid item xs={12}>
                  <TextField
                    select
                    fullWidth
                    label="Subcategory"
                    name="subcategory"
                    value={state.subcategory}
                    onChange={change}
                    variant="outlined"
                    required
                  >
                    <MenuItem value="">Select Subcategory</MenuItem>
                    {subcategory.map((el) => (
                      <MenuItem key={el._id} value={el._id}>
                        {el.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                {/* Submit Button */}
                <Grid item xs={12}>
                  <Button
                    fullWidth
                    variant="contained"
                    type="submit"
                    style={{background:"black"}}
                  >
                    {update ? "Submit" : "Update"}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}
