import React, { useState } from 'react'

export default function Login() {
    const [state, setstate] = useState({
        email: "",
        password: ""

    })
    const change = (e) => {
        const { name, value } = e.target
        setstate({
         ...state,
         [name]:value 
        })
    }
    const submit = async(e) =>{
        e.preventDefault()
        await fetch(`http://localhost:9595/`,{
            method:"POST",
            headers :{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(state)
        })
        console.log(state)
    }
    return (
        <form action="" method="post" onSubmit={submit}>
            <input type="text" name='email' value={state.email} onChange={change} />
            <input type="text" name='password' value={state.password} onChange={change} />
            <input type="submit" value={"login"} />
        </form>
    )
}
