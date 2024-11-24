import React, { useState } from 'react'

import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import axios from "axios"
import "../App.css"

function Login() {
    const [state, setstate] = useState({
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


    
    const submit = async (e) => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:9595/login", state);
            alert("Login successful!");
        } catch (error) {
            console.error("Error during registration:", error);
        }
    }

    return (
        <>

            <div className='main'>
                <Col xs={3}>
                    <form action="" onSubmit={submit}>
                        <div className="card1">
                            <p className="heading">Login Form</p>        
                            <div className="input-div">
                                <input className="input" name='email' type="text" placeholder="email" value={state.email} onChange={change} />
                            </div>
                            <div className="input-div">
                                <input className="input" name='password' type="text" placeholder="password" value={state.password} onChange={change} />
                            </div>
                            <div className="input-div">
                                <Link to="/forget" id='link'>Forget</Link>
                            </div>
                            <div className="button-div">
                                <button className="submit" type='submit'>Submit</button>
                            </div>
                        </div>
                    </form>

                </Col>
            </div>


        </>
    )
}

export default Login