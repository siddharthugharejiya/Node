import React from 'react'
import {Routes,Route} from "react-router-dom"
import Register from '../Componets/Register'
import Login from '../Componets/Login'
import Blog from '../Componets/Blog'
function MainRoute() {
  return (
    <>
    <Routes>
     <Route path="/blog" element={<Blog/>}></Route>
       
        <Route path="/" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
    </Routes>
    </>
  )
}

export default MainRoute