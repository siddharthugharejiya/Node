import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Signup from '../Components/Signup'
import Login from '../Components/Login'
import Change from '../Components/Change'

function R() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Signup />} ></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/change' element={<Change />} ></Route>
            </Routes>
        </>
    )
}

export default R