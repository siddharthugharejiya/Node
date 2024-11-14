import React, { useState } from 'react';

function Signup() {
    const [state, setState] = useState({
        username: "",
        email: "",
        password: ""
    });

    const change = (e) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value
        });
    };

    const submit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:9595/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(state)
            });
            const data = await response.json();
            console.log("Response:", data); // handle success or display a message
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <form onSubmit={submit} method="post">
            <input type="text" name="username" onChange={change} value={state.username} placeholder="Username" />
            <input type="email" name="email" onChange={change} value={state.email} placeholder="Email" />
            <input type="password" name="password" onChange={change} value={state.password} placeholder="Password" />
            <input type="submit" value="Sign Up" />
        </form>
    );
}

export default Signup;
