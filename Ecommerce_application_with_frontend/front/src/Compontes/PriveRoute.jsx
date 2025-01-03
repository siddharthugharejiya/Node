import React from 'react'
import { Navigate } from 'react-router-dom';

function PriveRoute({children}) {
    const userLogin = localStorage.getItem("login")
    console.log(userLogin);
    
  return (
    <div>
      {
        userLogin === "true" ? children : <Navigate to="/signup"/>
      }
    </div>
  )
}

export default PriveRoute
