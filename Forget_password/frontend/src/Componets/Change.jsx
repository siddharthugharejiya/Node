import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import "../App"
function Change() {
    const [state,setstate]=useState({
        newpass : "",
        email : "",
        otp : ""
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
    let data= await axios.post("http://localhost:9595/change",state)
    console.log(data);
    nav("/login")


    }
    

    return (
        <>

            <div class="login-box">
              <h1>Change Password</h1>
                <form onSubmit={submit}>
                    
                    <div class="user-box">
                        <input type="text" name="email" value={state.email} onChange={change} required="" />
                        <label>email</label>
                    </div>
                    <div class="user-box">
                        <input type="text" name="otp" value={state.otp} onChange={change} required="" />
                        <label>otp</label>
                    </div>
                    <div class="user-box">
                        <input type="text" name="newpass" value={state.newpass} onChange={change} required="" />
                        <label>newpass</label>
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

export default Change;
