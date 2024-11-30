import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Single() {
    const id = useParams() 
    useEffect(()=>{
  fetch(`http://localhost:9595/single/${id}`)
  .then(res => res.json())
  .then(res =>{
    console.log(res.data);
    
  })
    },[])
  return (
    <div>Single</div>
  )
}

export default Single