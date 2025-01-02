import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from '../Componets/Signup'
import Login from '../Componets/Login'
import Add_Pro from '../Componets/Add_Pro'
import GETPRO from '../Componets/GETPRO'
import { Dashboard } from '../Componets/Dashboard'
import { Asidebar } from '../Componets/Asidebar'
import Home from '../Componets/Home'
import Singlepage from '../Componets/Singlepage'

function MainRouter() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path='/add' element={<Add_Pro />}></Route>
        <Route path='/add/:id' element={<Add_Pro />}></Route>
        <Route path='/get' element={<GETPRO />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/aside' element={<Asidebar/>}></Route>
        <Route path='/single/:id' element={<Singlepage/>}></Route>
        <Route path='/desh' element={<Dashboard />}></Route>
      </Routes>
    </>
  )
}

export default MainRouter