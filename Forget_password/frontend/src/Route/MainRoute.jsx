import React from 'react'
import {Route,Routes} from "react-router-dom"
import Signup from '../Componets/Signup'
import Login from "../Componets/Login"
import Forget from '../Componets/Forget'
import Change from '../Componets/Change'
function MainRoute() {
  return (
    <Routes>
     <Route path='/' element={<Signup/>}></Route>
     <Route path='/login' element={<Login/>}></Route>
     <Route path='/forget' element={<Forget/>}></Route>
     <Route path='/change' element={<Change/>}></Route>
    </Routes>
  )
}

export default MainRoute