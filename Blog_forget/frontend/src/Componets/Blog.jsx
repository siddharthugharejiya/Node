import React, { useState, useEffect } from "react";

function Blog() {
    const [state, setState] = useState([]);
    const token = localStorage.getItem("authToken");
        // console.log(token);
            
    useEffect(() => {
        if (token) {
           fetch("http://localhost:9595/blog", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((res) => res.json())
                .then((res) => {
                    console.log(res.data);
                    
                    setState(res.data);
                })
                .catch((err) => {
                    console.log("Error fetching blog posts:", err);
                });
        } else {
            console.log("No token found.");
        }
    }, [token]);

    return (
        <div>
     
            {   
                state.map((el) => (
                    <div key={el.id}>
                        <h2>{el.title}</h2>
                        <p>{el.description}</p>
                        <img src={el.image} alt={el.title} />
                    </div>
                ))
            
        }
        </div>
            
        

    )
}

export default Blog;
