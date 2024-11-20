import React, { useState } from "react";
import axios from 'axios';
import "../App"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Signup() {
    const [state, setstate] = useState({
        username: "",
        email: "",
        password: ""
    })
    const change = (e) => {
        const { name, value } = e.target
        setstate({
            ...state,
            [name]: value
        })
    }
    const nav = useNavigate()
    const submit = async (e) => {
        e.preventDefault()
        let data = await axios.post("http://localhost:9595/", state)
        console.log(data);
        nav("/login")


    }
    return (
        <>

            <div class="login-box">
                <h1>SignUp</h1>
                <form onSubmit={submit}>
                    <div class="user-box">
                        <input type="text" name="username" value={state.username} onChange={change} required="" />
                        <label>Username</label>
                    </div>
                    <div class="user-box">
                        <input type="text" name="email" value={state.email} onChange={change} required="" />
                        <label>email</label>
                    </div>
                    <div class="user-box">
                        <input type="text" name="password" value={state.password} onChange={change} required="" />
                        <label>password</label>
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

export default Signup;
