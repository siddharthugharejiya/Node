import axios from 'axios'
import React, { useState } from 'react'

function Login() {
    const [state,setstate]=useState({
        email : "",
        password : ""
    })
    const change = (e) =>{
        const {name,value}=e.target
        setstate({
            ...state,
            [name]:value
        })
    }

    const submit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:9595/login`,state)
        .then(res => console.log(res.data))
    }
    

  return (
     <form action="" onSubmit={submit}>
        <input type="text" placeholder='email' name='email' value={state.email} onChange={change} />
        <input type="text" placeholder='password' name='password' value={state.password} onChange={change} />
        <input type="submit" value={"submit"} />
     </form>
  )
}

export default Login