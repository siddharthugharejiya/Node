import React, { useEffect, useState } from "react";

const Home = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9596/product`)
      .then((res) => res.json())
      .then((res) => {
        setState(res.data);
      });
  }, [state]);
 

  return (
  <>
  <h1>Home</h1>
  <div className="col-md-9 col-lg-10">
          <div className="container my-4">
            <h2 className="mb-4">Product List</h2>
            <div className="row">
              {state.length > 0 ? (
                state.map((el) => (
                  <div className="col-md-4 col-lg-3 mb-4" key={el.id}>
                    <div className="card h-100 border">
                      <img
                        src={el.image}
                        className="card-img-top"
                        alt={el.name}
                        height={200}
                        style={{ objectFit: "cover" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{el.name}</h5>
                        <p className="card-text">Category: {el.category}</p>
                        <p className="card-text text-success">Price: ₹{el.price}</p>
                        {/* <button className="btn btn-danger" onClick={()=>handledelete(el._id)}>Delete</button> */}
                        {/* <button className="btn btn-primary" onClick={()=>handleedite(el._id)}>Delete</button> */}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-12 text-center">
                  <p className="text-muted">No products available</p>
                </div>
              )}
            </div>
          </div>
        </div>
  </>
  );
};

export default Home;
