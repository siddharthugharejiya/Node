import React, { useEffect, useState } from 'react'
import axios from "axios"

function Add_Pro() {
  const [state, setstate] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
    category: "",
    subcategory: ""
  })
  const change = (e) => {
    const { name, value } = e.target
    setstate({
      ...state,
      [name]: value
    })
  }
  const Token = localStorage.getItem("Token")
  console.log(Token);
  
  const handlesubmit = async (e) => {
    e.preventDefault()
    console.log(state);
    
const data =  await axios.post(`http://localhost:9596/add`,state,{
    // headers : {
    //   'authorization' : `Bearer ${Token}`
    // }
   })
   console.log('Product added successfully:', data.data);
      
  }

  const [category, setcategory] = useState([])
  const [subcategory,setsubcategory]= useState([])
  useEffect(() => {
    axios.get(`http://localhost:9596/getCategory`)
      .then(res => {
        setcategory(res.data.data)
        console.log(res.data.data);
        

      })
  }, [])
  useEffect(()=>{
    axios.get(`http://localhost:9596/subget`)
    .then(res =>{
      setsubcategory(res.data.data)
      console.log(res.data.data);
      
    })
  },[])
console.log(subcategory);




  return (
    <>
      <form action="" method="post" onSubmit={handlesubmit}>
        <input type="text" name='name' placeholder='name' value={state.name} onChange={change} />
        <input type="text" name='image' placeholder='image' value={state.image} onChange={change} />
        <input type="text" name='price' placeholder='price' value={state.price} onChange={change} />
        <input type="text" name='description' placeholder='description' value={state.description} onChange={change} />
        <select
          name="category"
          value={state.category}
          onChange={change}
        >
          <option value="">Select Category</option>
          {
            category && category.length > 0 ?
              category.map((el) => (
              <option value={el._id} key={el.name}>{el.name}</option>
              ))
              : <option value="">Loading...</option>
          }
        </select>
        <select 
          name="subcategory" 
          value={state.subcategory} 
          onChange={change}
        >
          <option value="">Select Subcategory</option>
          {
            subcategory && subcategory.length > 0 ? 
            subcategory.map((el) => (
              <option value={el._id} key={el._id}>{el.name}</option>
            )) 
            : <option value="">Loading Subcategories...</option>
          }
        </select>
        <input type="submit" value="submit" />

      </form>
    </>
  )
}

export default Add_Pro