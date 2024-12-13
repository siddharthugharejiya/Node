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
    const submit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:9595/login`,state)
        .then(res =>{
         const Token = res.data.token
         const decoded = jwtDecode(Token);
         localStorage.setItem("Token",Token)
         localStorage.setItem("UserId",decoded.userId)
         localStorage.setItem("UserRole",decoded.userRole)
         console.log("Decode Token :",decoded);
        })
        nav("/add")
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
