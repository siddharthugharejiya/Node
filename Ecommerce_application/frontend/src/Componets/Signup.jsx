import React, { useState } from 'react'

function Signup() {
    const [state,setstate]=useState({
        username : "",
        email : "",
        password : "",
        role : ""
    })
    const change = (e) =>{
        const {name,value}= e.target
        setstate({
            ...state,
            [name]:value
        })
    } 
    const submit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:9595/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(state)
            });

            const data = await res.json();

            if (res.ok) {
                alert("Data added successfully");
                console.log(data);
            } else {
                alert("Error: " + data.error);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong. Please try again.");
        }
    };
  return (
    <form action="" method="post" onSubmit={submit}>
        <input type="text" placeholder='username' name='username' onChange={change} value={state.username} />
        <input type="text" placeholder='email' name='email' onChange={change} value={state.email} />
        <input type="text" placeholder='password' name='password' onChange={change} value={state.password} />
        <input type="text" placeholder='role' name='role' onChange={change} value={state.role} />
        {/* <input type="text" placeholder='username' name='username' onChange={change} value={state.username} /> */}
        <input type="submit" />
    </form>
  )
}

export default Signup