import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:9596/login`, state);
      const { token } = response.data;
      const decoded = jwtDecode(token);

      // Store token and user details in localStorage
      localStorage.setItem("Token", token);
      localStorage.setItem("UserId", decoded.userId);
      localStorage.setItem("UserRole", decoded.userRole);

      // Navigate based on user role
      const userRole = decoded.userRole;
      if (userRole === "admin") {
        navigate("/add");
      } else if (userRole === "user") {
        navigate("/");
      }
    } catch (error) {
      console.error("Login failed", error);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-95">
      <Form
        className="border border-1 p-4 p-md-5"
        style={{ width: "90%", maxWidth: "500px" }}
        onSubmit={handleSubmit}
      >
        <Row className="justify-content-center align-items-center">
          <Col xs={6} className="mb-4 d-flex justify-content-center align-items-center">
            <img src="./image/logo.png" alt="Logo" className="img-fluid" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={state.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </Col>
          <Col xs={12} className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={state.password}
              onChange={handleChange}
              placeholder="Enter password"
            />
          </Col>
        </Row>
        <Button className="btn btn-success w-100" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
