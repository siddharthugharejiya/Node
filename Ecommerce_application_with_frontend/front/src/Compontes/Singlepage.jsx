  import React, { useEffect, useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { addToCart, single_action, wholedata } from "../Redux/action";
  import { useNavigate, useParams } from "react-router-dom";

  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";
  import "../App.css";

  import Form from "react-bootstrap/Form";

  export default function Singlepage() {
    const { id } = useParams();
    console.log(id);
    
    const dispatch = useDispatch();
    
    const [price, setprice] = useState([1000]);

    const  productData = useSelector((state) => state.single.data)
    const product = productData ? productData.data : null
    useEffect(() => {
      dispatch(single_action(id));
      dispatch(wholedata());
    }, [id]);
    
    const handleCart = (product) => {
      console.log(product);
      
      dispatch(addToCart(product,id));
    };

    return (
      <>  
        <div
          className="d-flex justify-content-between align-items-center"
          style={{
            backgroundColor: "rgb(228 242 237 / 1)",
            padding: "25px",
          }}
        >
          <div
            className="col-xl-2 text-center"
            style={{ fontWeight: "700", fontSize: "20px" }}
          >
            Singlepage
          </div>
          <div className="col-xl-5 text-center">Home - Product - Singlepage</div>
        </div>

        <div className="container">
          <div className="row">
            <div className="row justify-content-center">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-8">
                <div className="row">
                  <div className="col-xxl-12 cate">
                    <div className="cate-sub col-xxl-9 col-sm-12 col-12">
                      <div className="px-b bbb">
                        {" "}
                        <b>Category </b>
                      </div>
                      <div className="bo"></div>
                      <div className="dair">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckIndeterminate"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckIndeterminate"
                            id="flex"
                          >
                            Juice & Drinks
                          </label>
                        </div>
                        <span>[20]</span>
                      </div>

                      <div className="dair">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckIndeterminate"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckIndeterminate"
                            id="flex"
                          >
                            Dairy & Milk
                          </label>
                        </div>
                        <span>[54]</span>
                      </div>

                      <div className="dair">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckIndeterminate"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckIndeterminate"
                            id="flex"
                          >
                            Snack & Spice
                          </label>
                        </div>
                        <span>[64]</span>
                      </div>
                    </div>

                    <div className="cate-sub col-xxl-9 col-sm-12">
                      <div className="px-b bbb">
                        {" "}
                        <b>Price </b>
                      </div>
                      <div className="bo"></div>
                      <div className="dair">
                        <Form.Range />
                      </div>
                      <div className="d-flex">
                        <b> Price </b> : ${price[0]}
                      </div>
                      <div>
                        <button
                          className="btn"
                          style={{

                            background: "rgb(100 180 150 / 1)",
                            color: "white",
                          }}
                        >
                          Filter
                        </button>
                      </div>
                    </div>

                    <div className="cate-sub col-xxl-9">
                      <div className="px-b bbb">
                        {" "}
                        <b>Colors </b>
                      </div>
                      <div className="bo"></div>
                      <div className="dair">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckIndeterminate"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckIndeterminate"
                            id="flex"
                          >
                            Blue
                          </label>
                        </div>
                        <span className="btn btn-primary p-2"></span>
                      </div>

                      <div className="dair">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckIndeterminate"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckIndeterminate"
                            id="flex"
                          >
                            Yellow
                          </label>
                        </div>
                        <span className="btn btn-warning p-2"></span>
                      </div>
                      <div className="dair">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckIndeterminate"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckIndeterminate"
                            id="flex"
                          >
                            Red
                          </label>
                        </div>
                        <span className="btn btn-danger p-2"></span>
                      </div>

                      <div className="dair">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckIndeterminate"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckIndeterminate"
                            id="flex"
                          >
                            Green
                          </label>
                        </div>
                        <span className="btn btn-success p-2"></span>
                      </div>
                    </div>

                    <div className="cate-sub col-xxl-9">
                      <div className="px-b bbb">
                        {" "}
                        <b>Weight </b>
                      </div>
                      <div className="bo"></div>
                      <div className="dair">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckIndeterminate"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckIndeterminate"
                            id="flex"
                          >
                            2kg Pack
                          </label>
                        </div>
                        {/* <span>[20]</span> */}
                      </div>

                      <div className="dair">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckIndeterminate"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckIndeterminate"
                            id="flex"
                          >
                            20kg Pack
                          </label>
                        </div>
                      </div>

                      <div className="dair">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckIndeterminate"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckIndeterminate"
                            id="flex"
                          >
                            30kg Pack
                          </label>
                        </div>
                        {/* <span>[64]</span> */}
                      </div>
                    </div>

                    <div className="cate-subb col-xxl-9">
                      <div className="px-b bbb">
                        {" "}
                        <b>Tages </b>
                      </div>
                      <div className="bo"></div>

                      <div className="foo">Vegetables</div>
                      <div className="foo">Juice</div>

                      <div className="foo">Vegetables</div>

                      <div className="foo">Food</div>
                      <div className="foo">Dry Fruit</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-9">
                {product ? (
                  <div className="col-xxl-12">
                    {/* <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={product.image} alt="Product Image" />
                      <Card.Body>
                        <Card.Title>{product.category}</Card.Title>
                        <Card.Text>{product.description}</Card.Text>
                        <Button variant="success" onClick={() => handleCart(product)}>
                          Add to Cart
                        </Button>
                      </Card.Body>
                    </Card> */}
                    {
                      
                    
                    <div class="card mb-3" style={{maxWidth : "100%"}}>
                      <div class="row g-0">
                        <div class="col-md-5">
                          <img src={product.image} class="img-fluid rounded-start" alt="..." id="roo"/>
                        </div>
                        <div class="col-md-7">
                          <div class="card-body" style={{alignItems : "start"}}>
                            <h5 class="card-title">Seeds Of Change Oraganic Quinoa, Brown</h5>
                            <p class="card-text" style={{color:"rgb(122 122 122 / 1)",textAlign:"start"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, iure minus error doloribus saepe natus?</p>
                            <p><i class="fa-solid fa-star" style={{color: "#e67a00"}}></i><i class="fa-solid fa-star" style={{color: "#e67a00"}}></i><i class="fa-solid fa-star" style={{color: "#e67a00"}}></i><i class="fa-solid fa-star" style={{color: "#e67a00"}}></i><i class="fa-solid fa-star" style={{color: "#e67a00"}}></i><span style={{color:"rgb(122 122 122 / 1)"}}>( 75 Reviews )</span></p>
                            <p>Brand : <span style={{color:"rgb(122 122 122 / 1)"}}>{product.name}</span></p>
                            <p>description : <span style={{color:"rgb(122 122 122 / 1)"}}>{product.description}</span></p>
                            <p>Diet Type : <span style={{color:"rgb(122 122 122 / 1)"}}>Vegetarian</span></p>
                            <p>Weight : <span style={{color:"rgb(122 122 122 / 1)"}}>200 Grams</span></p>
                            <p>Speciality : <span style={{color:"rgb(122 122 122 / 1)"}}>Gluten Free, Sugar Free</span></p>
                            <p>Info : <span style={{color:"rgb(122 122 122 / 1)"}}>Egg Free, Allergen-Free</span></p>
                            <p>Items : <span style={{color:"rgb(122 122 122 / 1)"}}>1</span></p>
                            <h2 style={{color:"rgb(100 180 150 / 1)"}}>${product.price}</h2>
                            <p className="foooo">Size / Weight : <div className="fooo">50kg </div>  <div className="fooo">80kg </div>  <div className="fooo">120kg </div>  <div className="fooo">200kg </div> </p>
                          </div>
                            {/* <span>1</span>
                            <button className="btn">+</button>
                            <button className="btn">-</button> */}
                          <button className="btn" onClick={()=>handleCart(product)} style={{background : "rgb(100, 180, 150)"}}>add to card</button>
                        </div>
                      </div>
                    </div>
  }
                  </div>
                            
                ) : (
                  <div>Loading...</div>
                )}
              </div>
            </div>


          </div>
        </div>
      </>
    )
  }