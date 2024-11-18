import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

function Signup() {
    const nav = useNavigate()
    const [state, setstate] = useState({
        username: "",
        email: "",
        password: ""
    });

    const change = (e) => {
        const { name, value } = e.target; 
        setstate({
            ...state,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:9595/', state); 
                console.log('Response:', response.data);
        
        } catch (error) {
            console.error('Error:', error);
           
        }

        nav("/login")
    };

    return (
        <div className="container">
            <form action="" method="post" onSubmit={handleSubmit}>
                <div className="card">
                    <a className="login">SignUP</a>
                    <div className="inputBox">
                        <input
                            type="text"
                            required="required"
                            name="username"
                            value={state.username}
                            onChange={change}
                        />
                        <span className="user">Username</span>
                    </div>

                    <div className="inputBox">
                        <input
                            type="email"
                            required="required"
                            name="email"
                            value={state.email}
                            onChange={change}
                        />
                        <span className="user">Email</span>
                    </div>

                    <div className="inputBox">
                        <input
                            type="password"
                            required="required"
                            name="password"
                            value={state.password}
                            onChange={change}
                        />
                        <span className="user">Password</span>
                    </div>

                    <button type="submit" className="enter">Enter</button>
                </div>
            </form>
        </div>
    );
}

export default Signup;
