import React, { useEffect, useState } from "react";
import { Asidebar } from "./Asidebar";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  Container,
  Box,
} from "@mui/material";
import "../App.css";

function GETPRO() {
  const [state, setState] = useState([]);
  const nav = useNavigate();

  // Function to fetch data
  const fetchData = () => {
    fetch(`http://localhost:9596/product`)
      .then((res) => res.json())
      .then((res) => {
        setState(res.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handledelete = (id) => {
    fetch(`http://localhost:9596/product/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        fetchData();
      })
      .catch((error) => console.error("Error deleting product:", error));
  };

  const handleedite = (id) => {
    nav(`/add/${id}`);
  };

  return (
    <Box display="flex" bgcolor="#121212">
      {/* Sidebar */}
      <Box width="25%" bgcolor="#1f1f1f" p={2} height={"95vh"}>
        <Asidebar />
      </Box>

      {/* Main Content */}
      <Box flex={1} p={3} bgcolor="#181818">
        <Container maxWidth="lg">
          <Typography variant="h4" component="h1" gutterBottom color="white">
            Product List
          </Typography>

          <Grid container spacing={3}>
            {state.length > 0 ? (
              state.map((el) => (
                <Grid item xs={12} sm={6} md={4} key={el._id}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      boxShadow: 3,
                      borderRadius: 2,
                      transition: "transform 0.3s ease",
                      "&:hover": { transform: "scale(1.03)" },
                      backgroundColor: "#2c2c2c",
                      color: "white",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="180"
                      image={el.image || "https://via.placeholder.com/150"}
                      alt={el.name}
                    />
                    <CardContent>
                      <Typography variant="h6" component="div" gutterBottom>
                        {el.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        gutterBottom
                      >
                        Category: {el.category}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        gutterBottom
                      >
                        {el.description}
                      </Typography>
                      <Typography variant="subtitle1" color="primary">
                        ₹{el.price}
                      </Typography>
                    </CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        px: 2,
                        pb: 2,
                        mt: "auto",
                      }}
                    >
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => handledelete(el._id)}
                      >
                        Delete
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleedite(el._id)}
                      >
                        Edit
                      </Button>
                    </Box>
                  </Card>
                </Grid>
              ))
            ) : (
              <Grid item xs={12}>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  align="center"
                  style={{ color: "white" }}
                >
                  No products available
                </Typography>
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default GETPRO;
