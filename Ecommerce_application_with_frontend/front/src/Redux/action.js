
import { CART_ADD, CART_FETCH, DATA, EMAIL, L_EMAIL, L_PASSWORD, PASSWORD,  SINGLE,  USERNAME } from "./action_type";

export const product_action = () => (dispatch) => {
    fetch('http://localhost:9596/product')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
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
            console.log(data);
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
      const response = await fetch(`http://localhost:9596/cart/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(product), 
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error adding to cart");
      }
  
      const data = await response.json(); 
      console.log("Added to cart:", data);
  
      dispatch({
        type: "CART_ADD",
        payload: data.data, 
      });
    } catch (error) {
      console.error("Error sending product to cart:", error.message);
    }
  };
  


export const fetchCartData = () => (dispatch) => {
    fetch(`https://data-3-hyvi.onrender.com/cart`)
    .then((res) => res.json())
    .then((data) => {
        console.log("Cart data fetched", data);
        dispatch({
            type: CART_FETCH, 
            payload: data
        });
    })
    .catch((error) => {
        console.error("Error fetching cart data:", error);
    });
};
export const remove_action = (id) => (dispatch) => {
    fetch(`https://data-3-hyvi.onrender.com/cart/${id}`, {
      method: "DELETE",
    })
    .then((res) => res.json())
    .then((data) => {
      console.log("Product removed", data);
      dispatch({
        type: "REMOVE_FROM_CART",
        payload: id, 
      });
    })
    .catch((error) => {
      console.error("Error removing product from cart:", error);
    });
  };
  
export const wholedata = () => (dispatch)=>{
          fetch('https://data-3-hyvi.onrender.com/products')
          .then(res => res.json())
          .then((res)=>{
            dispatch({
                type : "WHOLE",
                payload : res
            })
          })
}
export const signup_action = (userData, navigate) => (dispatch) => {
   
    fetch('https://data-3-hyvi.onrender.com/username', {
        method: "POST",
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(data => {
        if (data) {
            alert("Successful signup");
            navigate("/login");
            dispatch({
                type: USERNAME,
                payload: data.username
            });
            dispatch({
                type: EMAIL,
                payload: data.email
            });
            dispatch({
                type: PASSWORD,
                payload: data.password
            });
        }
    })
    .catch((error) => {
        console.error("Error during signup:", error);
    });
};

export const login_action = (login,nav)=> (dispatch)=>{
    if(login.email && login.password)
    {
        
        fetch(`https://data-3-hyvi.onrender.com/username?email=${login.email}`)
        .then(res=>res.json())
        .then(res=>{
           if(res.length > 0)
           {
            if(res[0].password ==  login.password)
            {
                alert("Login successfully ")
                nav("/")
            }
            else{
                alert("invid email or password")
            }
           }
           else{
            alert("invid email or password")

           }
         dispatch({
             type:L_EMAIL,
             payload:res.email
           })
           dispatch({
             type:L_PASSWORD,
             payload:res.password
           })
     
           
        })
    }
    else{
        alert("invalid email or password")
    }
     
}