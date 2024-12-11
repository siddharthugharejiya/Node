import React, { useEffect, useState } from 'react'

function GETPRO() {
    const [state,setstate]=useState([])
    useEffect(()=>{

        fetch(`http://localhost:9595/product`)
        .then(res => res.json())
        .then(res =>{
            
       setstate(res.data)            
        })
    },[])
  return (
    <div>
    {
        state.map((el) => (
            <>
                <div key={el.id}>
                   <p>
                     {el.name}
                    </p>
                    <p>{el.category}</p>
                    <p>{el.price}</p>
                    </div>
            </>
        ))
    }
</div>

  )
}

export default GETPRO
