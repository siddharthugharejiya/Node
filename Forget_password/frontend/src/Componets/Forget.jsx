import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import "../App"
function Forget() {
    const [state,setstate]=useState({
        
        email : "",
    
    })
    const change = (e) =>{
       const {name ,value} = e.target
       setstate({
        ...state,
        [name]:value
       })
    }
    const nav = useNavigate()
    const submit = async(e) =>{
       e.preventDefault()
    let data= await axios.post("http://localhost:9595/forget",state)
    console.log(data);
    nav("/change")

    }
    

    return (
        <>

            <div class="login-box">
              <h1>forget</h1>
                <form onSubmit={submit}>
                    
                    <div class="user-box">
                        <input type="text" name="email" value={state.email} onChange={change} required="" />
                        <label>email</label>
                    </div>
                    <div style={{ marginTop: "20px", textAlign: "start" }}>
                        <Link to="/login" className="link">
                            Login
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

export default Forget;
