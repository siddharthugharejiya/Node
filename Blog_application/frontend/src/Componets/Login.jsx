import React, { useState } from 'react'

function Login() {
    const [token,settoken]=useState(null)
    const [UserId,setUserId]=useState(null)
    localStorage.setItem("Token",token)
    localStorage.setItem("UserId",UserId)
    
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
    // console.log(state);

    const submit = async (e) => {
        e.preventDefault()
        await fetch(`http://localhost:9595/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(state)

        })
        .then(res => res.json())
        .then(res =>{
            // console.log(res.res_id);
            // console.log(res.data._id);
            settoken(res.token)
            setUserId(res.data._id)
            
        })
      
        


    }
    return (
        <>
            <h1>Login</h1>
            <form action="" method="POST" onSubmit={submit}>
                <input type="text" name='email' value={state.email} onChange={change} />
                <input type="text" name='password' value={state.password} onChange={change} />
                <input type="submit" />
            </form>
        </>
    )
}

export default Login