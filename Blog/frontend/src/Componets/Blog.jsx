import React, { useEffect, useState } from 'react'
import axios from "axios"

function Blog() {
    const [state, setState] = useState(null)

    useEffect(() => {
        axios.get("http://localhost:9595/")
            .then(res => {
                setState(res.data) 
            })
            .catch(err => console.error("Error fetching data: ", err)) 
    }, [])

    console.log(state)

    return (
        <div>
           
            {state && Array.isArray(state) && state.map((el, index) => (
                <div key={index}>
                    <img src={el.image} alt="img" />
                </div>
            ))}
        </div>
    )
}

export default Blog
