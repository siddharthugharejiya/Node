import React, { useEffect, useState } from 'react';

function Own() {
  let token = localStorage.getItem("Token");
  let UserId = localStorage.getItem("UserId");
  console.log(token);
  console.log(UserId);

  const [state, setState] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9595/own", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(res => {
        setState(res.data);
      })
      .catch(error => {
        console.error("Error fetching blogs:", error);
      });
  }, [token]);

  return (
    <div>
      <h1>Blog Posts</h1>
      {state.map((el) => (
        <div key={el._id}>
          <h1>{el.title}</h1>
          <img src={el.image} alt="img" />
          <p>{el.description}</p>
          <button></button>
        </div>
      ))}
     
    </div>
    
  );
}

export default Own;
 