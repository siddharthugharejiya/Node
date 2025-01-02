import React, { useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";
import { Asidebar } from "./Asidebar";
import { useParams } from "react-router-dom";


export function Add_Pro() {
  const [state, setstate] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
    category: "",
    subcategory: "",
  })
  const [update, setupdate] = useState(true)

  const change = (e) => {
    const { name, value } = e.target;
    setstate({
      ...state,
      [name]: value,
    });
  }

  const Token = localStorage.getItem("Token")
  const { id } = useParams()
  console.log(id);
  
  useEffect(() => {
    if (id) {
      fetch(`http://localhost:9596/product/${id}`, {
        method: "GET",
      })
      .then(res => res.json())
      .then(res => {
          console.log(res)
          console.log(res.data)
          console.log(res.data.name)
          setstate({
            name: res.data.name,
            image: res.data.image,
            price: res.data.price,
            description: res.data.description,
            category: res.data.category,
            subcategory: res.data.subcategory,
          })
        })
        setupdate(false)
    }
  }, [id])

  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      if (update == false) {
        await fetch(`http://localhost:9596/product/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(state),
        })
          .then((res) => res.json())
          .then((data) => {
            alert("Product added edite data !");
          });
          setupdate(true)
      }


      else {
        await fetch("http://localhost:9596/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Token}`,
          },
          body: JSON.stringify(state),
        })
          .then((res) => res.json())
          .then((data) => {
            alert("Product added successfully!");
          });
      }
      setupdate(true)
      console.log(update);
      
    }

    catch (error) {
      alert("backend is not runing on server side");
    }


  }





  const [category, setcategory] = useState([]);
  const [subcategory, setsubcategory] = useState([]);

  useLayoutEffect(() => {
    axios.get(`http://localhost:9596/getCategory`).then((res) => {
      setcategory(res.data.data);
    });
  }, []);

  useLayoutEffect(() => {
    axios.get(`http://localhost:9596/subget`).then((res) => {
      setsubcategory(res.data.data);
    });
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">

          <div className="col-lg-3 col-md-4 bg-light vh-100">
            <Asidebar />
          </div>


          <div className="col-lg-5 col-md-8" style={{ marginLeft: "30px" }}>
            <div className="container mt-5">
              <h2 className="mb-4">Add Product</h2>
              <form
                onSubmit={handlesubmit}
                className="p-4 border rounded bg-white shadow"
                style={{ width: "70%" }}
              >
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Product Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Enter product name"
                    value={state.name}
                    onChange={change}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="image" className="form-label">
                    Image URL
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="image"
                    name="image"
                    placeholder="Enter image URL"
                    value={state.image}
                    onChange={change}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="price" className="form-label">
                    Price
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="price"
                    name="price"
                    placeholder="Enter product price"
                    value={state.price}
                    onChange={change}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    placeholder="Enter product description"
                    value={state.description}
                    onChange={change}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="category" className="form-label">
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    className="form-select"
                    value={state.category}
                    onChange={change}
                  >
                    <option value="">Select Category</option>
                    {category.map((el) => (
                      <option value={el._id} key={el._id}>
                        {el.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="subcategory" className="form-label">
                    Subcategory
                  </label>
                  <select
                    id="subcategory"
                    name="subcategory"
                    className="form-select"
                    value={state.subcategory}
                    onChange={change}
                  >
                    <option value="">Select Subcategory</option>
                    {subcategory.map((el) => (
                      <option value={el._id} key={el._id}>
                        {el.name}
                      </option>
                    ))}
                  </select>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  {update == true ? "Submit" : "Update"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


