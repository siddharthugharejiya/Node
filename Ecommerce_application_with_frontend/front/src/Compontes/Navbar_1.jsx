import { useEffect, useLayoutEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData, remove_action } from "../Redux/action";

function Navbar_1() {
  const [activeCategory, setActiveCategory] = useState("Dairy & Bakery");
  const [show, setShow] = useState(false);
  const [quantities, setQuantities] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const nav = useNavigate();

  const categories = {
    "Dairy & Bakery": {
      Dairy: ["Milk", "Ice Cream", "Cheese", "Frozen Custard", "Frozen Yogurt"],
      Bakery: [
        "Cake And Pastry",
        "Rusk Toast",
        "Bread & Buns",
        "Chocolate Brownie",
        "Cream Roll",
      ],
    },
    "Fruits & Vegetables": {
      Fruits: ["Apples", "Bananas", "Oranges"],
      Vegetables: ["Carrots", "Broccoli", "Spinach"],
    },
    "Snack & Spice": {
      Snacks: ["Chips", "Popcorn", "Nuts"],
      Spice: ["Cumin", "Coriander", "Turmeric"],
    },
    "Juice & Drinks": {
      Juice: ["Orange Juice", "Apple Juice", "Grape Juice"],
      Drinks: ["Soda", "Water", "Tea"],
    },
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  // const cartt = useSelector((state) => state.All.data);
  // const cart = cartt.cartItems || [];

  const cartData = useSelector((state) => state.cart.data);
  console.log(cartData);

  const remove_card = useSelector((state) => state.remove_items.data);
  useEffect(()=>{
    if(remove_card)
    {
      dispatch(remove_action())
    }
  },[])


  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  const handleQuantityChange = (id, change) => {
    setQuantities((prevQuantities) => {
      const newQuantity = (prevQuantities[id] || 1) + change;
      return {
        ...prevQuantities,
        [id]: newQuantity > 0 ? newQuantity : 1,
      };
    });
  };

  const calculateTotal = () => {
    if (Array.isArray(cartData) && cartData.length > 0) {
      return cartData.reduce((total, item) => {
        const quantity = quantities[item._id] || 1;
        return total + (item.price * quantity);
      }, 0);
    }
    return 0;
  };

  const handleclose = (id) => {
    dispatch(remove_action(id));
    window.location.reload();
  };

  const checkout = () => {
    nav("/");
  };

  return (
    <div className="container-fluid">
      <Navbar expand="lg" className="flex-wrap">
        <div id="con">
          <Navbar.Brand as={Link} to={"/"}>
            <img
              src="/image/logo.png"
              className="img-fluid rounded-top"
              alt="Logo"
            />
          </Navbar.Brand>

          <div className="col-12 col-lg-4 col-md-7 col-sm-12 d-flex align-items-center">
            <input
              type="search"
              placeholder="Search for items..."
              id="search"
            />
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{ background: "transparent", color: "black" }}
              >
                All Categories
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Men</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Women</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Electronics</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="col-2 col-sm-2 glass fs-light">
              <i
                className="fa-solid fa-magnifying-glass"
                style={{ color: "#ffffff" }}
              ></i>
            </div>
          </div>

          <div className="col-12 col-lg-3 d-flex justify-content-around align-items-center">
            <div className="d-flex align-items-center">
              <i
                className="ri-user-line"
                style={{ fontSize: "20px", margin: "0px 5px" }}
              ></i>
              <div>
                <div className="paste-button">
                  <button className="button" style={{ fontWeight: 500 }}>
                    Account
                  </button>
                  <div className="dropdown-content">
                    <Link id="top" to={"/signup"}>Register</Link>
                    <Link id="middle" to={"/"}>Checkout</Link>
                    <Link id="bottom" to={"/login"}>Login</Link>
                    <Link id="bottom" to={"/add"}>admin</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex align-items-center">
              <i
                className="ri-heart-line"
                style={{ color: "black", margin: "0px 5px", fontSize: "20px" }}
              ></i>
              <div>Wishlist</div>
            </div>

            <div className="d-flex align-items-center">
              <div onClick={handleShow} className="me-2 btn" style={{ background: "transparent", color: "black", border: "none" }}>
                <i className="ri-shopping-cart-line"></i>
              </div>
              <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  {Array.isArray(cartData) && cartData.length > 0 ? (
                    cartData.map((item) => (
                      <div key={item._id} className="cart-item d-flex align-items-center mb-3 p-3 border rounded">
                       
                        <div className="cart-item-image col-3 d-flex justify-content-center">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="cart-item-img img-fluid"
                            style={{ maxHeight: "100px", objectFit: "cover", borderRadius: "8px" }}
                          />
                        </div>

                        <div className="d-flex flex-column ms-3 col-6" style={{position : "relative"}}>
                          <div className="cart-item-details">
                            <h5 className="cart-item-name">Title : {item.name}</h5>
                            <p className="cart-item-description">description : {item.description}</p>
                            <div className="cart-item-category text-muted">Category: {item.category?.name || 'Unknown'}</div>
                            <div className="cart-item-price">${item.price} x {quantities[item._id] || 1} Kg</div>
                          </div>

                          {/* Quantity Controls */}
                          <div className="cart-item-quantity d-flex align-items-center mt-2">
                            <Button
                              variant="outline-dark"
                              onClick={() => handleQuantityChange(item._id, -1)}
                              style={{ marginRight: "10px" }}
                            >
                              -
                            </Button>
                            <div className="cart-item-quantity-value">{quantities[item._id] || 1}</div>
                            <Button
                              variant="outline-dark"
                              onClick={() => handleQuantityChange(item._id, 1)}
                              style={{ marginLeft: "10px" }}
                            >
                              +
                            </Button>
                          </div>
                        </div>

                      
                        <div className="cart-item-remove ms-3" style={{margin:"-20%"}}>
                          <i
                            className="fa-solid fa-xmark text-danger"
                            onClick={() => handleclose(item._id)}
                            style={{ cursor: "pointer", fontSize: "20px" }}
                          ></i>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center mt-4">
                      <p>No items in the cart.</p>
                    </div>
                  )}


                  <div className="mt-3">
                    <strong>Total: ${calculateTotal().toFixed(2)}</strong>
                  </div>
                  <button className="btn text-light mt-1" style={{ background: "rgb(100, 180, 150)" }} onClick={checkout}>Checkout</button>
                </Offcanvas.Body>
              </Offcanvas>
            </div>
          </div>
          <div className="bor"></div>
        </div>
      </Navbar>
    </div>
  );
}

export default Navbar_1;
