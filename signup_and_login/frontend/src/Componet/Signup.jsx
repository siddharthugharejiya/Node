import { useState } from "react"

const Signup = () =>{
    const[state,setstate]=useState({
        username:"",
        email:"",
        password:""
    })
    const change = (e) =>{
        let {name,value}=e.target

       setstate({
        ...state,
        [name]:value
       })
    }
    
    
    const submit = (e) =>{
        e.preventDefault()
        fetch("http://localhost:9595/user/form",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(state)
        })
        .then(res=>res.json())
        .then(res=>{
            console.log(res);
        })
    }
    return(
        <>
        <h1>Signup</h1>
        <form action="" method="POST" onSubmit={submit}>
            <input type="text" name="username" onChange={change} />
            <input type="text" name="email" onChange={change} />
            <input type="text" name="password" onChange={change} />
            <input type="submit" />
        </form>
        </>
    )
}
export default Signup