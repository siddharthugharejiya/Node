import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from '../Componets/Signup'
import Login from '../Componets/Login'
import Add_Pro from '../Componets/Add_Pro'
function MainRouter() {
  return (
     <>
     <Routes>
     <Route path="/signup" element={<Signup/>} ></Route>
     <Route path="/login" element={<Login/>} ></Route>
     <Route path='/add' element={<Add_Pro/>}></Route>
     </Routes>
     </>
  )
}

export default MainRouter