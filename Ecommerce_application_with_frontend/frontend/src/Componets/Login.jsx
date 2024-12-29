import axios from 'axios'
import React, { useState } from 'react'
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';

function Login() {
    const [state,setstate]=useState({
        email : "",
        password : ""
    })
    const change = (e) =>{
        const {name,value}=e.target
        setstate({
            ...state,
            [name]:value
        })
    }
   const nav = useNavigate()
    const submit = async(e) => {
        e.preventDefault()
     const data = await axios.post(`http://localhost:9596/login`,state)
        .then(res =>{
            console.log(res);
            
         const Token = res.data.token
         const decoded = jwtDecode(Token);
         localStorage.setItem("Token", Token);
         localStorage.setItem("UserId", decoded.userId);
         localStorage.setItem("UserRole", decoded.userRole);
         let UserRole = localStorage.getItem("UserRole")
         console.log(UserRole);
         if(UserRole === "admin")
         {
          return nav("/add")
         }
         if(UserRole === "user")
         {
            return nav("/")
         }
         
         
        })
        .catch(error => {
            console.error("Login failed", error);
            alert("Login failed. Please check your credentials.");
        });
        
    }

  return (
     <form action="" onSubmit={submit}>
        <input type="text" placeholder='email' name='email' value={state.email} onChange={change} />
        <input type="text" placeholder='password' name='password' value={state.password} onChange={change} />
        <input type="submit" value={"submit"} />
     </form>
  )
}

export default Login
