import React, { useState } from 'react'

function Add_Pro() {
  const [state,setstate] = useState({
    name : "",
    image : "",
    price : "",
    description : "",
    category : "",
    subcategory : ""
  })
  const change = (e) =>{
    const {name,value}=e.target
    setstate({
      ...state,
      [name]:value
    })
  }
  const handlesubmit = (e) =>{
      e.preventDefault()
      fetch(``)
  }
  return (
    <>
    <form action="" method="post" onSubmit={handlesubmit}>
        <input type="text" name='name' placeholder='name' value={state.name} onChange={change}/>
        <input type="text" name='image' placeholder='image' value={state.image} onChange={change}/>
        <input type="text" name='price' placeholder='price' value={state.price} onChange={change}/>
        <input type="text" name='description' placeholder='description' value={state.description} onChange={change}/>
        <input type="text" name='category' placeholder='category' value={state.category} onChange={change}/>
        <input type="text" name="subcategory" placeholder='subcategory' value={state.subcategory} />
        <input type="submit" value="submit" />

    </form>
    </>
  )
}

export default Add_Pro