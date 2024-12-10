import React, { useState } from 'react'
import axios from "axios"
function Signup() {
    const [state,setstate]=useState({
        username : "",
        email : "",
        password : "",
        secretkey :"",
        role : ""
    })
    const change = (e) =>{
        const {name,value}= e.target
        setstate({
            ...state,
            [name]:value
        })
    } 
    console.log(state);
    
    const submit = async (e) => {
        e.preventDefault();
        try {
         axios.post("http://localhost:9595/form",state)
        .then(res => {
            console.log(res.data);
        })
            
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong. Please try again.");
        }
    };
  return (
    <form action="" method="post" onSubmit={submit}>
        <input type="text" placeholder='username' name='username' onChange={change} value={state.username} />
        <input type="text" placeholder='email' name='email' onChange={change} value={state.email} />
        <input type="text" placeholder='password' name='password' onChange={change} value={state.password} />
          <select name="role" id="" value={state.role}  onChange={change}  >
            <option value="admin">admin</option>
            <option value="user" >User</option>
          </select>
        <input type="text" placeholder='secretkey' name='secretkey' onChange={change} value={state.secretkey} />
        <input type="submit" />
    </form>
  )
}

export default Signup