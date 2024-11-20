import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import "../App"
function Login() {
    const [state,setstate]=useState({
        
        email : "",
        password : ""
    })
    const change = (e) =>{
       const {name ,value} = e.target
       setstate({
        ...state,
        [name]:value
       })
    }
    const submit = async(e) =>{
       e.preventDefault()
    let data= await axios.post("http://localhost:9595/login",state)
    console.log(data);

    }

    return (
        <>

            <div class="login-box">
                <h1>Login</h1>
                <form onSubmit={submit}>
                    
                    <div class="user-box">
                        <input type="text" name="email" value={state.email} onChange={change} required="" />
                        <label>email</label>
                    </div>
                    <div class="user-box">
                        <input type="text" name="password" value={state.password} onChange={change} required="" />
                        <label>password</label>
                    </div>
                    <div style={{ marginTop: "20px", textAlign: "start" }}>
                        <Link to="/forget" className="link">
                            Forget
                        </Link>
                    </div>
                    
                    <center>
                        
                        <button type="submit">
                            SEND
                            <span></span>
                        </button>
                        </center>
                </form>
            </div>
        </>
    );
}

export default Login;
