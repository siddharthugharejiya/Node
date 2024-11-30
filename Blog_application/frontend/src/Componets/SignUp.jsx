import React, { useState } from 'react'

function SignUp() {
    const [state,setstate]=useState({
        username : "",
        email : "",
        password : ""
    })
    const change = (e) =>{
         const {name,value} = e.target
         setstate({
            ...state,
            [name]:value
         })
    }
    console.log(state);
    
    const submit = async(e) =>{
        e.preventDefault()
       await fetch("http://localhost:9595/register",{
            method : "POST",
            headers : {
                "Content-Type":"application/json"
            },
            body:JSON.stringify(state)

        })
        alert("data add")
        // .then(res => res.json())
        // .then(res =>{
        //     console.log(res);
            
        // })
    }
  return (
    <form action="" method="post" onSubmit={submit}>
        <input type="text" name='username' value={state.username} onChange={change} />
        <input type="text" name='email'    value={state.email} onChange={change} />
        <input type="text" name='password' value={state.password} onChange={change} />
        <input type="submit" />
    </form>
  )
}

export default SignUp