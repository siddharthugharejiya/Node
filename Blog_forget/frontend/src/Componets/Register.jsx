import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import axios from "axios"
import "../App.css"
import { useNavigate } from 'react-router-dom';

function Register() {
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
        e.preventDefault();
        try {
             fetch("http://localhost:9595/register",{
                method : "POST",
                headers : {
                 "Content-Type" : "Application/json"
                },
                body:JSON.stringify(state)
              })
            nav("/login")
        } catch (error) {
            console.log(error);
            
        }
     

    };
    
    return (
        <>

            <div className='main'>
                <Col xs={3}>
                    <form action="" onSubmit={submit}>
                        <div className="card1">
                            <p className="heading">Register Form</p>

                            <div className="input-div">
                                <input type="text" className="input" required placeholder="username" name='username' value={state.username} onChange={change} />
                            </div>
                            <div className="input-div">
                                <input className="input" type="text" placeholder="email" name='email' value={state.email} onChange={change} />
                            </div>
                            <div className="input-div">
                                <input className="input" type="text" placeholder="password" name='password' value={state.password} onChange={change} />
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

export default Register