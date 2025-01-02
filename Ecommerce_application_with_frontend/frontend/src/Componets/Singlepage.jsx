import React, { useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css';

function Singlepage() {
    const { id } = useParams();
    const [state, setState] = useState([]);
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => setQuantity((prev) => prev + 1);
    const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

    useLayoutEffect(() => {
        fetch(`http://localhost:9596/single/${id}`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("Product fetched successfully:", data);
                setState(data.data);
            })
            .catch((err) => console.error("Error fetching product:", err));
    }, [id]);

    if (!state) {
        return <p className="loading-message">Loading product details...</p>;
    }

    const handleAddToCart = () => {
        fetch(`http://localhost:9596/cart/${id}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ quantity }),
        })
            .then((res) => res.json())
            .then(data => {
                console.log("Product added to cart:", data);
                alert(data.msg); // Show a confirmation message
            })
            .catch((err) => console.error("Error adding to cart:", err));
    };

    return (
        <div className="singlepage-container">
            <div className="card-wrapper">
                <Card className="custom-card">
                    <Card.Img
                        className="custom-card-img"
                        variant="top"
                        src={state.image}
                        alt={state.name}
                    />
                    <Card.Body>
                        <Card.Title className="product-title">{state.name}</Card.Title>
                        <Card.Text className="product-description">{state.description}</Card.Text>
                        <Card.Text className="product-price">₹ {state.price}</Card.Text>
                        <div className="quantity-controls">
                            <Button className="btn btn-dark" onClick={handleDecrement}>-</Button>
                            <span className="quantity-display">{quantity}</span>
                            <Button className="btn btn-dark" onClick={handleIncrement}>+</Button>
                        </div>
                        <Button className="custom-button" onClick={handleAddToCart}>
                            Add to Cart
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default Singlepage;
