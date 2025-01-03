import Swal from 'sweetalert2';
import { CART_ADD, CART_FETCH, DATA, EMAIL, L_EMAIL, L_PASSWORD, PASSWORD, SINGLE, USERNAME } from "./action_type";

export const product_action = () => (dispatch) => {
    fetch('http://localhost:9596/product')
        .then((res) => res.json())
        .then((data) => {
            dispatch({
                type: DATA,
                payload: data
            });
        })
        .catch((error) => {
            console.error("Error fetching products:", error);
        });
};

export const single_action = (id) => (dispatch) => {
    fetch(`http://localhost:9596/single/${id}`)
        .then((res) => res.json())
        .then((data) => {
            dispatch({
                type: SINGLE,
                payload: data
            });
        })
        .catch((error) => {
            console.error("Error fetching single product:", error);
        });
};

export const addToCart = (product, id) => async (dispatch) => {
  try {
    const Token = localStorage.getItem("Token"); 
    const response = await fetch(`http://localhost:9596/cart/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${Token}`
      },
      body: JSON.stringify(product)
    });

    const data = await response.json();

    if (response.ok) {
      Swal.fire({
        icon: 'success',
        title: 'Added to Cart!',
        text: `${product.name} has been added to your cart.`,
        confirmButtonText: 'Okay'
      });
      
      dispatch({
        type: CART_ADD,
        payload: data
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'There was an error adding the item to the cart. Please try again.',
        confirmButtonText: 'Retry'
      });
    }
  } catch (error) {
    console.error("Error sending product to cart:", error.message);
    Swal.fire({
      icon: 'error',
      title: 'Network Error',
      text: 'Could not connect to the server. Please try again later.',
      confirmButtonText: 'Retry'
    });
  }
};

export const fetchCartData = () => (dispatch) => {
    fetch(`http://localhost:9596/cart`)
    .then((res) => res.json())
    .then((data) => {
        if (data.cartItems) {
          Swal.fire({
            icon: 'success',
            title: 'Cart Loaded!',
            text: `Your cart has been successfully loaded.`,
            confirmButtonText: 'Okay'
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Failed to load cart data.',
            confirmButtonText: 'Retry'
          });
        }
        dispatch({
          type: CART_FETCH,
          payload: data.cartItems || [],
        });
    })
    .catch((error) => {
        console.error("Error fetching cart data:", error);
        Swal.fire({
          icon: 'error',
          title: 'Network Error',
          text: 'Could not connect to the server. Please try again later.',
          confirmButtonText: 'Retry'
        });
    });
};

export const remove_action = (id) => (dispatch) => {
    fetch(`http://localhost:9596/cart/${id}`, {
      method: "DELETE",
    })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Item Removed!',
          text: 'The item has been removed from your cart.',
          confirmButtonText: 'Okay'
        });

        dispatch({
          type: "REMOVE_FROM_CART",
          payload: id,
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'There was an error removing the item from the cart.',
          confirmButtonText: 'Retry'
        });
      }
    })
    .catch((error) => {
      console.error("Error removing product from cart:", error);
      Swal.fire({
        icon: 'error',
        title: 'Network Error',
        text: 'Could not connect to the server. Please try again later.',
        confirmButtonText: 'Retry'
      });
    });
};

export const wholedata = () => (dispatch) => {
    fetch('https://data-3-hyvi.onrender.com/products')
    .then(res => res.json())
    .then((res) => {
        dispatch({
            type: "WHOLE",
            payload: res
        })
    })
};
