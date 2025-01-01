import React, { useEffect, useState } from "react";
import { Asidebar } from "./Asidebar";
import { useNavigate } from "react-router-dom";

function GETPRO() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9596/product`)
      .then((res) => res.json())
      .then((res) => {
        setState(res.data);
      });
  }, []);
  const handledelete = (id) =>{
    console.log(id);
    fetch(`http://localhost:9596/product/${id}`,{
      method : "DELETE",
      
    })
    .then(Res => Res.json())
    .then(data =>{
      console.log(data);
      
      alert(data)
    })

  }
  const nav = useNavigate()
  const handleedite = (id) =>{
    nav(`/add/${id}`)
  }

  return (
    <div className="container-fluid">
      <div className="row">
        
        {/* Sidebar */}
        <div className="col-md-3 col-lg-2 bg-light vh-100">
          <Asidebar />
        </div>
        
     
        <div className="col-md-9 col-lg-5" style={{margin:"0px 100px"}}>
          <div className="container my-4">
            <h2 className="mb-4">Product List</h2>
            <div className="row">
              {state.length > 0 ? (
                state.map((el) => (
                  <div className="col-md-4 col-lg-8 mb-4" key={el.id}>
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
                        <p className="card-text">description: {el.description}</p>
                        <p className="card-text text-success">Price: ₹{el.price}</p>
                        <button className="btn m-1 btn-danger" style={{borderRadius:"4px"}} onClick={()=>handledelete(el._id)}>Delete</button>
                        <button className="btn btn-primary"style={{borderRadius:"4px"}} onClick={()=>handleedite(el._id)}>Edite</button>
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
      </div>
    </div>
  );
}

export default GETPRO;
