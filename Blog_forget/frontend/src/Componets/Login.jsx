import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function Login() {
    const [state, setState] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const change = (e) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value,
        });
    };

    const submit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true); 

        try {
            const response = await axios.post('http://localhost:9595/login', state, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log('Login successful:', response.data);
            const token = response.data.token;
            console.log(token);
            localStorage.setItem('authToken', token);
            navigate('/blog');
        } catch (err) {
            if (err.response && err.response.data) {
                setError(err.response.data.msg || 'Login failed. Please try again.');
            } else {
                setError('Something went wrong. Please try again later.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="main">
            <Col xs={3}>
                <form onSubmit={submit}>
                    <div className="card1">
                        <p className="heading">Login Form</p>
                        <div className="input-div">
                            <input
                                className="input"
                                name="email"
                                type="email"
                                placeholder="Email"
                                value={state.email}
                                onChange={change}
                                required
                            />
                        </div>
                        <div className="input-div">
                            <input
                                className="input"
                                name="password"
                                type="password"
                                placeholder="Password"
                                value={state.password}
                                onChange={change}
                                required
                            />
                        </div>
                        <div className="input-div">
                            <Link to="/forget" id="link">Forgot Password?</Link>
                        </div>
                        {error && <div className="error-msg">{error}</div>}
                        <div className="button-div">
                            <button className="submit" type="submit" disabled={loading}>
                                {loading ? 'Logging in...' : 'Submit'}
                            </button>
                        </div>
                    </div>
                </form>
            </Col>
        </div>
    );
}

export default Login;
