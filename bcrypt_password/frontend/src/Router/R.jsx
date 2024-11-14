
import React from 'react'
import { Routes ,Route } from 'react-router-dom'
import Signup from '../Component/Signup'
import Login from '../Component/Login'

function R() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Signup/>} ></Route>
    <Route path="/login" element={<Login/>}></Route>
    </Routes>
    </>
  )
}

export default R