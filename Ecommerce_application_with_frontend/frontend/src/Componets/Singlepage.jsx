import React, { useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css'; 

function Singlepage() {
    const { id } = useParams();
    const [state, setState] = useState(null);

    useLayoutEffect(() => {
        fetch(`http://localhost:9596/single/${id}`, {
            method: 'POST',
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("Product fetched successfully:", data);
                setState(data.data); // Assuming `data.data` contains the object
            })
            .catch((err) => console.error("Error fetching product:", err));
    }, [id]);

    if (!state) {
        return <p className="loading-message">Loading product details...</p>;
    }

    return (
        <div className="singlepage-container">
            <div className="card-wrapper">
                <Card className="custom-card">
                    <Card.Img className="custom-card-img" variant="top" src={state.image} alt={state.name} />
                    <Card.Body>
                        <Card.Title className="product-title">{state.name}</Card.Title>
                        <Card.Text className="product-description">{state.description}</Card.Text>
                        <Card.Text className="product-price">₹ {state.price}</Card.Text>
                        <Button className="custom-button">
                            Add to Cart
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default Singlepage;
