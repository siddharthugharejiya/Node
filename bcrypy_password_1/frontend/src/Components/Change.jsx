import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import "../App.css"

function Change() {
    const nav = useNavigate()
    const [state, setstate] = useState({
       
        email: "",
        CurrentPassword: "",
        NewPassword:""
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
        console.log(state);
        
        try {
            const response = await axios.post('http://localhost:9595/change', state); 
                console.log('Response:', response.data);
        
        } catch (error) {
            console.error('Error:', error);
           
        }
    };

    return (
        <div className="container">
            <form action="" method="post" onSubmit={handleSubmit}>
                <div className="card">
                    
                    <a className="login">Change</a>
                
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
                            name="CurrentPassword"
                            value={state.CurrentPassword}
                            onChange={change}
                        />
                        <span className="user">Password</span>
                    </div>

                    <div className="inputBox">
                        <input
                            type="password"
                            required="required"
                            name="NewPassword"
                            value={state.NewPassword}
                            onChange={change}
                        />
                        <span className="user">NewPassword</span>
                    </div>
                    <div className='change '>
                      <Link to="/login">Login</Link>
                    </div>
                    <button type="submit" className="enter">Enter</button>
                </div>
            </form> 
        </div>
    );
}

export default Change;