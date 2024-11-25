import React, { useState } from 'react' ;

 function Blog() {
    const [state, setState] = useState([]);     
    const token = localStorage.getItem('authToken');
    
    fetch("http://localhost:9595/blog",{
        headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
    .then(res => res.json())
    .then(res => {
        console.log(res); 
        setState(res.data || [])
        
    })
    .catch(err => {
        console.log('Error fetching blog posts:', err);
        
    });


   

    return (
        <div>
            
            {state.map((el) => (
                <div key={el.id}>
                    <h2>{el.title}</h2>
                    <p>{el.description}</p> 
                    <img src={el.image} alt={el.title} />
                </div>
            ))}
        </div>
    );
}

export default Blog;
