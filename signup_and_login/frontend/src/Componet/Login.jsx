import { useState } from "react"

const Login = () =>{
    let [state,setstate]=useState({
        username:"",
        email:"",
        password:""
    })
    const change=(e) =>{
       let {name,value}=e.target
       setstate({
        ...state,
        [name]:value
       })

    }
    const submit = (e) =>{
     e.preventDefault()
     setstate({
            username:"",
            email:"",
            password:""
     })
     fetch("http://localhost:9595/user/form")
     .then(res=>res.json())
     .then(res=>{
        console.log(res);
        
     })

    }
  return(
    <>
    <h1>Login</h1>
    <form action="" method="post" onSubmit={submit}>
        <input type="text" name="email" onChange={change} />
        <input type="text" name="password" onChange={change} />
        <input type="submit" />
    </form>
    </>
  )
}
export default Login