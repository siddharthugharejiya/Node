import React, { useEffect, useState } from 'react'
function Add() {
    const token = localStorage.getItem('Token')
    const [state,setState]=useState({
        title:"",
        image:"",
        description:""
    })
  
    const change = (e) =>{
        const {name , value} = e.target
        setState({
            ...state,
        [name]:value
        })
    }
    const submit = (e) =>{
      e.preventDefault()
      fetch("http://localhost:9595/add",{
        method : "POST",
        headers : {
          "Content-Type" : "application/json",
          authorization: `Bearer ${token}`,
        },
        body:JSON.stringify(state)
      })
    }
  return (
    <form action="" method="post" onSubmit={submit}>
        <input type="text" name='title' value={state.title} onChange={change}/>
        <input type="text" name='image' value={state.image} onChange={change}/>
        <input type="text" name='description' value={state.description} onChange={change}/>
        <input type="submit" />
    </form>
  )
}

export default Add