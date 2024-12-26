import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from '../Componets/Signup'
import Login from '../Componets/Login'
import Add_Pro from '../Componets/Add_Pro'
import GETPRO from '../Componets/GETPRO'
import Home from '../Componets/Home'
function MainRouter() {
  return (
     <>
     <Routes>
     <Route path="/signup" element={<Signup/>} ></Route>
     <Route path="/login" element={<Login/>} ></Route>
     <Route path='/add' element={<Add_Pro/>}></Route>
     <Route path='/get' element={<GETPRO/>}></Route>
     <Route path='/' element={<Home/>}></Route>
     </Routes>
     </>
  )
}

export default MainRouter