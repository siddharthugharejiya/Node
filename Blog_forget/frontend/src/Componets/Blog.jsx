import React, { useState } from 'react'
import axios from 'axios'
function Blog() {
    const [state,setstate]=useState(null)
    axios.get("http://localhost:9595/blog")
    .then(res => setstate(res.data))
    console.log(state);
    
  return (
    <div>Blog</div>
  )
}

export default Blog