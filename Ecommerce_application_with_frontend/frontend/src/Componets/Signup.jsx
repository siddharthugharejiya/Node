import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [state, setstate] = useState({
        username: "",
        email: "",
        password: "",
        secretkey: "",
        role: ""
    });

    const change = (e) => {
        const { name, value } = e.target;
        setstate({
            ...state,
            [name]: value
        });
    };
    console.log(state);

    const nav = useNavigate();
    const submit = async (e) => {
        e.preventDefault();
        if (!state.role) {
            alert("Please select a valid role.");
            return;
        }
        try {
            await axios.post("http://localhost:9596/form", state)
                .then(res => {
                    console.log(res.data);
                });
            nav("/login");
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <form action="" method="post" onSubmit={submit}>
            <input type="text" placeholder='username' name='username' onChange={change} value={state.username} />
            <input type="text" placeholder='email' name='email' onChange={change} value={state.email} />
            <input type="password" placeholder='password' name='password' onChange={change} value={state.password} />
            <select name="role" value={state.role} onChange={change}>
                <option value="">Select</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
            </select>
            <input type="text" placeholder='secretkey' name='secretkey' onChange={change} value={state.secretkey} />
            <input type="submit" />
        </form>
    );
}

export default Signup;
