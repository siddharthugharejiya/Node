import React, { useEffect, useState } from "react";
import { Asidebar } from "./Asidebar";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardMedia, Button, Typography, Grid, Container } from '@mui/material';
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

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array means this effect runs once after initial render

  const handledelete = (id) => {
    fetch(`http://localhost:9596/product/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message); // Assuming API returns message on successful delete
        // Re-fetch the data after deletion to reflect updated list
        fetchData(); // Refetch the data immediately after deletion
      })
      .catch((error) => console.error("Error deleting product:", error));
  };

  const handleedite = (id) => {
    nav(`/add/${id}`);
  };

  return (
    <div className="container-fluid">
      <div className="row">
       
        <div className="col-md-3 col-lg-2 bg-light vh-100">
          <Asidebar />
        </div>

        <div className="col-md-9 col-lg-10" style={{ margin: "0px 100px" }}>
          <div className="container my-4">
            <h2 className="mb-4">Product List</h2>
            <Grid container spacing={4}>
              {state.length > 0 ? (
                state.map((el) => (
                  <Grid item xs={12} sm={6} md={4} key={el._id}>
                    <Card sx={{ height: "100%" }}>
                      <CardMedia
                        component="img"
                        height="200"
                        image={el.image}
                        alt={el.name}
                        sx={{ objectFit: "cover" }}
                      />
                      <CardContent>
                        <Typography variant="h5" component="div">
                          {el.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Category: {el.category}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Description: {el.description}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Price: ₹{el.price}
                        </Typography>
                        <Button 
                          variant="contained" 
                          color="error" 
                          sx={{ marginTop: 1 }}
                          onClick={() => handledelete(el._id)}
                        >
                          Delete
                        </Button>
                        <Button 
                          variant="contained" 
                          sx={{ marginTop: 1, marginLeft: 1 }}
                          onClick={() => handleedite(el._id)}
                        >
                          Edit
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                ))
              ) : (
                <div className="col-12 text-center">
                  <p className="text-muted">No products available</p>
                </div>
              )}
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GETPRO;
