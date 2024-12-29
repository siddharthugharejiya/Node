import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

function GETPRO() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9596/product`)
      .then((res) => res.json())
      .then((res) => {
        setState(res.data);
      });
  }, []);

  return (
    <div className="container my-5">
      <div className="row">
        {state.map((el) => (
          <div className="col-md-4 mb-4" key={el.id}>
            <div className="card border">
              <img src={el.image} className="card-img-top" alt={el.name} height={300}/>
              <div className="card-body">
                <h5 className="card-title">{el.name}</h5>
                <p className="card-text">Category: {el.category}</p>
                <p className="card-text text-success">Price: ₹{el.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GETPRO;
